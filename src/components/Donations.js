import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col,DropdownButton,Dropdown } from "react-bootstrap";
import { Icon, Image, Button } from 'semantic-ui-react';

function Donations() {
  const [donations, setDonations] = useState([]);
  const [search, setSearch] = useState("")
  // const [selectedCategory, setSelectedCategory] = useState("All");

  // const handleCategorySelect = (category) => {
  //   setSelectedCategory(category);
  // };
  // const categories = ["All", ...new Set(donations.map((donation) => donation.category))];
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };
    

  const searched = donations.filter((charity) => {
    return search.toLowerCase() === ""
      ? charity
      : charity.name.toLowerCase().includes(search);
  });
  // const filteredDonations =
  // selectedCategory === "All"
  //   ? donations
  //   : donations.filter((donation) => donation.category === selectedCategory);


  useEffect(() => {
    fetch("http://localhost:3000/donations")
      .then((response) => response.json())
      .then((donationsData) => setDonations(donationsData));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/donations/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedDonations = donations.filter((donation) => donation.id !== id);
        setDonations(updatedDonations);
      });
      // an alert shown on deleting a donation
      alert("You deleted a Donation.")
  };
  const donationCards = searched.map((donation) => (
    <Col key={donation.id} sm={6} md={4} lg={3} className="my-3">
      <Card 
      className={`my-3 mx-2 ${hover ? 'shadow-lg' : 'shadow'}`}
      style={{ width: '18rem', cursor: 'pointer' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
        <div className="donation-img" style={{
                height: 240,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${donation.image})`
            }}
            
            ></div>
        <Card.Body>
          <Card.Title>{donation.name}</Card.Title>
          <Card.Text>{donation.description}</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            {donation.category}
          </Card.Subtitle>
          <Card.Text>Quantity: {donation.quantity}</Card.Text>
          {/* <Button variant="danger" onClick={() => handleDelete(donation.id)} style = {{marginRight: '100px'}}>Delete</Button>
          <Button variant="success"  onClick={() => handleDelete(donation.id)}>Edit</Button> */}
          <Button primary ><Icon name='edit' />Edit</Button>
          <Button secondary onClick={() => handleDelete(donation.id)}><Icon name='delete' />Delete</Button>
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <Container>
      {/* <DropdownButton
  id="dropdown-basic-button"
  title={`Filter by category: ${selectedCategory}`}>
  {categories.map((category) => (
    <Dropdown.Item
      key={category}
      onClick={() => handleCategorySelect(category)} >
      {category}
    </Dropdown.Item>
  ))}
</DropdownButton> */}

       <form style={{padding:'20px  20px ',paddingLeft: '180px'}} className="d-flex " role="search">
        <input style={{width:'60rem'}}className="form-control me-2" type="text" placeholder="Search for a donation" value={search}  onChange={(e) => setSearch(e.target.value)} aria-label="Search"/>
      </form>
      <Row>{donationCards}</Row>
    </Container>
  );
}

export default Donations;
