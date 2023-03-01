import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const categoryOptions = [
  { value: 'Finances', label: 'Money' },
  { value: 'Clothing', label: 'Clothing' },
  { value: 'Electronics', label: 'Electronics' },
  { value: 'Food', label: 'Food' },
  { value: 'household items', label: 'Household Items' },
];

const AddDonation = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Selected category: ${selectedCategory}`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formCategory">
        <Form.Label>Select a category:</Form.Label>
        <Form.Control as="select" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Select...</option>
          {categoryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Button type="submit" disabled={!selectedCategory}>
        Submit
      </Button>
    </Form>
  );
};

export default AddDonation;
