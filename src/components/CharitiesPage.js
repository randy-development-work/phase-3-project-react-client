import Home from "./Home";
import React, {useState,useEffect} from "react";
import { Fragment } from "react";
import EachCharity from "./EachCharity";
import AddDonation from "./AddDonation";
import { Route, Routes, Outlet } from "react-router-dom";
import { Form, Button, Row, Col } from 'react-bootstrap';
import Donations from "./Donations";
import EditCharity from "./EditCharity";

function CharitiesPage(){
    const [charities, setCharities]= useState([]);
    const [search, setSearch] = useState("")

    const searched = charities.filter((charity) => {
        return search.toLowerCase() === ""
          ? charity
          : charity.name.toLowerCase().includes(search);
      });

useEffect(() => {
        fetch(" http://localhost:9292/charities")
        .then((response) => response.json())
        // using async method to add events
        .then((charitiesData) => {
            console.log(charitiesData) 
            return setCharities(() => charitiesData)})
    }, [])

    const onecharity = searched.map((charity) => {
        return (
            <EachCharity key={charity.id} charity={charity}/>
        )
    })

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
        fetch("http://localhost:9292/charities", {
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
        alert("You've added a Charity.")
        .catch(error => console.error(error));

        console.log(formData)
    }

    // showing new edits
    function updateCharity(updatedCharity) {
        const updatedChar = charities.map((charity) => {
            if (charity.id === updatedCharity.id) {
                return updatedCharity;
            } else return charity;
        });
        setCharities(updatedChar);
    }
      

    return (
        <Fragment>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/charities" element={
                    <Fragment>
                        <div className="ui three column grid container" style={{
                            
                            display: 'flex',
                            justifyContent: 'space-between', 
                            alignItems: 'center' 
                            }}>
                            <div className="row">
                           <div>
                           <form style={{padding:'20px  20px ',paddingLeft: '180px'}} className="d-flex " role="search">
                             <input style={{width:'60rem'}}className="form-control me-2" type="text" placeholder="Search for a charity" value={search}  onChange={(e) => setSearch(e.target.value)} aria-label="Search"/>
                          </form>
                          <div>
                            <h2 style={{textAlign: 'center'}}>Select a Charity to Add a Donation</h2>                            
                          </div>
                           </div>
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
                                                         <Form.Label>Image</Form.Label>
                                                         <Form.Control type="file" placeholder="Enter image"  />
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
                <Route path="/charities/:charityId/edit" element={<EditCharity charities = {charities} onUpdateCharity = {updateCharity} />} />


            </Routes>

        </Fragment>
    )
}
export default CharitiesPage