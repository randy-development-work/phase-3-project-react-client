import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { Header, Icon } from 'semantic-ui-react'


const categoryOptions = [
  { value: 'Finances', label: 'Money' },
  { value: 'Clothing', label: 'Clothing' },
  { value: 'Electronics', label: 'Electronics' },
  { value: 'Food', label: 'Food' },
  { value: 'Household Items', label: 'Household Items' },
];

const AddDonation = ({charitydata}) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const {id, name, image, location, description, year_established} = charitydata
  const [donations,setDonations] = useState([])
  console.log(donations)
  console.log(charitydata)

  // use params to get charity_id
  let params = useParams();
  const [charityInfo, setcharityInfo] = useState({})
  // console.log(params.charityId);

  // capture data from server based on param and save it to state
  useEffect(() => {
    fetch(`http://localhost:3000/charities/${params.charityId}`)
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
    fetch("http://localhost:3000/donations", {
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
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      {/* <Form.Group controlId="formBasicId">
          <Form.Label>Id</Form.Label>
            <Form.Control type="text" placeholder="Donation Id"  />
       </Form.Group> */}
      <Form.Group controlId="formBasicName">
            <Form.Control type="text" placeholder="Donation"  style={{width:'60rem', marginTop: '10px'}} />
       </Form.Group>
       <Form.Group controlId="formBasicImage">
            <Form.Control type="text" placeholder="Donation Image" style={{width:'60rem',marginTop: '10px'}} />
       </Form.Group>
       <Form.Group controlId="formBasicDescription">
            <Form.Control type="text" placeholder="Donation Description" style={{width:'60rem',marginTop: '10px'}} />
       </Form.Group>
       <Form.Group controlId="formBasicQuantity">
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
