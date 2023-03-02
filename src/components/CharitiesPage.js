import Home from "./Home";
import React, {useState,useEffect} from "react";
import { Fragment } from "react";
import EachCharity from "./EachCharity";
import AddDonation from "./AddDonation";
import { Route, Routes, Outlet } from "react-router-dom";
import { Form, Button, Row, Col } from 'react-bootstrap';
import Donations from "./Donations";

function CharitiesPage(){
    const [charities, setCharities]= useState([]);
    const [search, setSearch] = useState("")
   
    // Filters charities based on search input
    const searched = charities.filter((charity) => {
        return search.toLowerCase() === ""
          ? charity
          : charity.name.toLowerCase().includes(search);
      });
   
    // Fetching charities data from backend API using useEffect hook
useEffect(() => {
        fetch(" http://localhost:3000/charities")
        .then((response) => response.json())
        // using async method to add events
        .then((charitiesData) => {
            console.log(charitiesData) 
            return setCharities(() => charitiesData)})
    }, [])
   // Mapping each charity to an EachCharity component
    const onecharity = searched.map((charity) => {
        return (
            <EachCharity key={charity.id} charity={charity}/>
        )
    })
 
    // Handles form submission when adding a new charity
function handleFormSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const formData = {
          name: form.elements.formBasicName.value,
          image: form.elements.formBasicImage.value,
          location: form.elements.formBasicLocation.value,
          description: form.elements.formBasicDescription.value,
          year_established: form.elements.formBasicYear.value
        };
        fetch("http://localhost:3000/charities", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
          setCharities([...charities, data]);
          form.reset();
        })
        .catch(error => console.error(error));

        console.log(formData)
    }
      

    return (
        <Fragment>
             
            <Routes>
                      {/* Route for Home component */}
                <Route path="/home" element={<Home />} />
                 {/* Route for displaying all charities */}
                <Route path="/allcharities" element={
                    <Fragment>
                        {/* Container for search bar, list of charities, and add charity form */}
                        <div className="ui three column grid container" style={{
                            
                            display: 'flex',
                            justifyContent: 'space-between', 
                            alignItems: 'center' 
                            }}>
                                
                            <div className="row">
                                {/* Search bar */}

                           <div>
                           <form style={{padding:'20px  20px ',paddingLeft: '180px'}} className="d-flex " role="search">
                             <input style={{width:'60rem'}}className="form-control me-2" type="text" placeholder="Search for a charity" value={search}  onChange={(e) => setSearch(e.target.value)} aria-label="Search"/>
                          </form>
                           </div> 
                           {/* List of charities */}
                                {onecharity}
                                <div>
                                <div>
                                    <h1 style={{padding:'10px  20px ',paddingLeft: '40%'}}>
                                        Add Your Charity
                                    </h1>
                                    <Form onSubmit={handleFormSubmit} >
                                                <Form.Group controlId="formBasicName">
                                                    <Form.Label>Name</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter charity name"  />
                                                </Form.Group>
                                                <Form.Group controlId="formBasicDescription">
                                                        <Form.Label>Description</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter Description" />
                                                 </Form.Group>
                                                <Form.Group controlId="formBasicImage">
                                                         <Form.Label>Image Link</Form.Label>
                                                         <Form.Control type="text" placeholder="Enter image"  />
                                                 </Form.Group>
                                                 <Form.Group controlId="formBasicYear">
                                                         <Form.Label>Year Established</Form.Label>
                                                         <Form.Control type="text" placeholder="Year Established" />
                                                 </Form.Group>
                                                 <Form.Group controlId="formBasicLocation">
                                                         <Form.Label>Location</Form.Label>
                                                         <Form.Control type="text" placeholder="Enter location" />
                                                 </Form.Group>
                                                 <Row>
                                                    <Col className="text-center">
                                                        <Button variant="primary" type="submit">
                                                            Submit
                                                        </Button>
                                                    </Col>
                                                </Row>
                                           </Form>
                                    </div>
                            </div>
                                
                            </div>
                            
                            
                        </div>
                    </Fragment>
                }>

                </Route>
                <Route path="/charities/:charityId/donate" element={<AddDonation charitydata = {charities} />} />
                <Route path="/charities/:id/viewdonations" element={<Donations charitydata = {charities} />} />


            </Routes>

        </Fragment>
    )
}
export default CharitiesPage