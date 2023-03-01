import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const categoryOptions = [
  { value: 'Finances', label: 'Money' },
  { value: 'Clothing', label: 'Clothing' },
  { value: 'Electronics', label: 'Electronics' },
  { value: 'Food', label: 'Food' },
  { value: 'household items', label: 'Household Items' },
];

const AddDonation = ({charitydata}) => {
 
  // Set up state to keep track of the selected category and list of donations
  const [selectedCategory, setSelectedCategory] = useState('');
 
  // Destructure the properties of charitydata for use in the component
  const {id, name, image, location, description, year_established} = charitydata
  const [donations,setDonations] = useState([])
  console.log(donations)
  console.log(charitydata)
   
  // Event handler for when the form is submitted
function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = {
      // id: form.elements.formBasicId.value,
      category: form.elements.formCategory.value,
      name: form.elements.formBasicName.value,
      image: form.elements.formBasicImage.value,
      description: form.elements.formBasicDescription.value,
      quantity: form.elements.formBasicQuantity.value
    };
     // Make a POST request to the server with the form data
    fetch("http://localhost:3000/donations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
         // Add the new donation to the list of donations and reset the form
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
    <div className='cover' >
    <div >
      <h1>{name}</h1>
    <Form onSubmit={handleFormSubmit} style={{padding:'20px  20px ',paddingLeft: '30%'}} >
      <Form.Group controlId="formCategory">
        <Form.Label>Select a category:</Form.Label>
        <Form.Control as="select" value={selectedCategory} onChange={handleCategoryChange} style={{width:'60rem'}}>
          <option value="">Select...</option>
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


      <Button type="submit"  className='mt-3' style = {{marginLeft:"30%"}}>
        Submit
      </Button>
    </Form>
    </div>
    </div>
  );
};

export default AddDonation;
