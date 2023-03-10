import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams, useNavigate } from "react-router-dom";
import { Header, Icon, Message } from 'semantic-ui-react';
import Alert from '@mui/material/Button';


// const categoryOptions = [
//   { value: 'Cash', label: 'Cash' },
//   { value: 'Clothing', label: 'Clothing' },
//   { value: 'Electronics', label: 'Electronics' },
//   { value: 'Food', label: 'Food' },
//   { value: 'Household Items', label: 'Household Items' },
// ];

const AddDonation = ({charitydata}) => {
  // navigator
  let navigator = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState('');
  const {id, name, image, location, description, year_established} = charitydata
  const [donations,setDonations] = useState([])
  console.log(donations)
  console.log(charitydata)

  // use params to get charity_id
  let params = useParams();
  const [charityInfo, setcharityInfo] = useState({})
  // console.log(params.charityId);

  // categories usestate
  const [categoryOptions, setCategoryOptions] = useState([])

  // getting categories from server
  useEffect(() => {
      fetch("https://g-iv-back-end-production.up.railway.app/categories")
      .then((r)=>r.json())
      .then((data) => setCategoryOptions(data))
  },[]);

  console.log(categoryOptions);

  // capture data from server based on param and save it to state
  useEffect(() => {

    fetch(`https://g-iv-back-end-production.up.railway.app/charities/${params.charityId}`)
    .then((r)=> r.json())
    .then((data)=>setcharityInfo(data))
  }, [params.charityId])


function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = {
      // id: form.elements.formBasicId.value,

      // input charity_id foreign key from params
      charity_id: params.charityId,
      category: form.elements.formCategory.value,
      name: form.elements.formBasicName.value,
      image: form.elements.formBasicImage.value,
      description: form.elements.formBasicDescription.value,
      quantity: form.elements.formBasicQuantity.value
    };
    fetch("https://g-iv-back-end-production.up.railway.app/donations", {

      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      setDonations([...donations, data]);
      form.reset();
    })
    // after post, thiss takes the user to the donations page and gets an alert
    navigator("/donations")
    alert("Thank you for Donating.")
    .catch(error => console.error(error));

    console.log(formData)
}
function handleCategoryChange(e){
  setSelectedCategory(e.target.value);
}
  return (
    <div className ='cover' >
      <div style={{paddingLeft: '40%', backgroundColor:'rgb(72 107 159)'}}>
      <Header as='h2' icon >
        <Icon name='chess queen' />
        {charityInfo.name}
        <Header.Subheader>
          Thank you for your Donation.
        </Header.Subheader>
      </Header>
      </div>
      <br />
      <br />
      <br />
    <Form onSubmit={handleFormSubmit} style={{padding:'20px  20px ',paddingLeft: '18%'}} >
      <Form.Group controlId="formCategory">
        <Form.Label>Select a category:</Form.Label>
        <Form.Control as="select" value={selectedCategory} onChange={handleCategoryChange} style={{width:'60rem'}}>
          <option value="">Select Donation Category...</option>
          {categoryOptions.map((option) => (
            <option key={option.name} value={option.name}>
              {option.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      {/* <Form.Group controlId="formBasicId">
          <Form.Label>Id</Form.Label>
            <Form.Control type="text" placeholder="Donation Id"  />
       </Form.Group> */}
      <Form.Group controlId="formBasicName">
      <Form.Label>Donation Name</Form.Label>
            <Form.Control type="text" placeholder="Donation Name"  style={{width:'60rem', marginTop: '10px'}} />
       </Form.Group>
       <Form.Group controlId="formBasicImage">
       <Form.Label>Image</Form.Label>
            <Form.Control type="text" placeholder="Donation Image" style={{width:'60rem',marginTop: '10px'}} />
       </Form.Group>
       <Form.Group controlId="formBasicDescription">
       <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Donation Description" style={{width:'60rem',marginTop: '10px'}} />
       </Form.Group>
       <Form.Group controlId="formBasicQuantity">
       <Form.Label>Quantity</Form.Label>
            <Form.Control type="text" placeholder="Donation Quantity"  style={{width:'60rem',marginTop: '10px'}}/>
       </Form.Group>

       <br />
      <Button type="submit" style = {{marginLeft:"35%"}}>
        Submit
      </Button>
    </Form>
    </div>
  );
};

export default AddDonation;
