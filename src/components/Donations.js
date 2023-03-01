import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
function Donations() {
  const [donations, setDonations] = useState([]);
  const [search, setSearch] = useState("")
  const searched = donations.filter((charity) => {
    return search.toLowerCase() === ""
      ? charity
      : charity.name.toLowerCase().includes(search);
  });
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
  };
  const donationCards = searched.map((donation) => (
    <Col key={donation.id} sm={6} md={4} lg={3} className="my-3">
      <Card >
      <div className="rounded-top" style={{
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
          <Button variant="danger" onClick={() => handleDelete(donation.id)} style = {{marginRight: '100px'}}>Delete</Button>
          <Button variant="success"  onClick={() => handleDelete(donation.id)}>Edit</Button>
        </Card.Body>
      </Card>
    </Col>
  ));
  return (
    <Container>
       <form style={{padding:'20px  20px ',paddingLeft: '180px'}} className="d-flex " role="search">
        <input style={{width:'60rem'}}className="form-control me-2" type="text" placeholder="Search for a donation" value={search}  onChange={(e) => setSearch(e.target.value)} aria-label="Search"/>
      </form>
      <Row>{donationCards}</Row>
    </Container>
  );
}
export default Donations;