import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col,DropdownButton,Dropdown } from "react-bootstrap";
import { Icon, Image, Button } from 'semantic-ui-react';
import { json, Link, useParams } from "react-router-dom";
import FilterType from "./FilterType";

function Donations() {
  // let params = useParams();
  // const [editData, setEditData] = useState(null);
  // const { groupId, donationId } = useParams();

  const [donations, setDonations] = useState([]);
  // const [search, setSearch] = useState("")
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


  // create state for holding search 
    // because this is a parent compoonent to Each event and Search
    const [searchResults, setSearchResults] = useState("");

    // state to hold search parameters for each event
    const [searchParam] = useState(["description", "name", "quantity", "category"]);

    // useState for filter parameters
    const [filterParam, setFilterParam] = useState(["All"]);

  // useState for pagination
  const [paginate, setPaginate] = useState(8);
    

  // load more button styling
  const loadBtn = {
      display: "block",
      marginTop: "2rem",
      marginBottom: "3rem",
      fontSize: "1.4rem",
      padding: "12px 32px",
      marginLeft: "auto",
      marginRight: "auto",
      borderRadius: "40px",
      backgroundColor: "#2d92de",
      border: "1px solid #2185d0",
      color: "#fff",
      cursor: "pointer"
  }
    

  // const searched = donations.filter((charity) => {
  //   return search.toLowerCase() === ""
  //     ? charity
  //     : charity.name.toLowerCase().includes(search);
  // });
  // const filteredDonations =
  // selectedCategory === "All"
  //   ? donations
  //   : donations.filter((donation) => donation.category === selectedCategory);


  useEffect(() => {
    fetch("http://localhost:9292/donations")
      .then((response) => response.json())
      .then((donationsData) => setDonations(donationsData));
      console.log(donations);
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:9292/donations/${id}`, {
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

  // give edit data individual donation data
  // useEffect(() => {
  //   fetch(`http://localhost:9292/donations/${donationsId}`)
  //   .then((r)=>r.json())
  //   .then((data) => setEditData(data))
  // }, [donationId])

  // function to handle both search results and filtered results
  function search(donations) {
    return donations.filter((donation) => {
        // filter by type
        if (donation.category === filterParam) { 
            // default search based on parameters
            return searchParam.some((newDonation) => {
                return (
                    donation[newDonation]
                        .toString()
                        .toLowerCase()
                        .indexOf(searchResults.toLowerCase()) > -1
                );
            });
        } else if (filterParam == "All") {
            return searchParam.some((newDonation) => {
                return (
                    donation[newDonation]
                        .toString()
                        .toLowerCase()
                        .indexOf(searchResults.toLowerCase()) > -1
                );
            });

        }
    }
)}

const load_more = (donation) => {
    setPaginate((prevValue) => prevValue + 8);
};

let donData = Object.values(donations);

  let donationCards = search(donData)
    .slice(0, paginate).map((donation) => (
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
          {/* <div>
            <Link to={`/donations/${donation.id}/edit`} className="ms-3">
                      
                      <p>edit</p>
            </Link>
          </div>
          <Button primary ><Icon name='edit' />
            Edit
          </Button> */}
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
<div className="wrapper" style={{
                        display: "flex",
                        justifyContent: 'space-between', 
                        alignItems: 'center' 
                        }}>
       <form className="d-flex " role="search">
        
        <input style={{width:'25rem'}}className="form-control me-2" type="text" placeholder="Search for a donation" value={searchResults}  onChange={(e) => setSearchResults(e.target.value)} aria-label="Search"/>
      </form>
      <FilterType filterParam={filterParam} setFilterParam={setFilterParam} />
      </div>
      <Row>{donationCards}</Row>
      <button onClick={load_more} style={loadBtn}>Load More...</button>
    </Container>
  );
}

export default Donations;
