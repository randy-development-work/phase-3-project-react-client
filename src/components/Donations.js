import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

function Donations() {
  const [donations, setDonations] = useState([]);

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
  const donationCards = donations.map((donation) => (
    <Col key={donation.id} sm={6} md={4} lg={3} className="my-3">
      <Card>
        <Card.Img variant="top" src={donation.image} />
        <Card.Body>
          <Card.Title>{donation.name}</Card.Title>
          <Card.Text>{donation.description}</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            {donation.category}
          </Card.Subtitle>
          <Card.Text>Quantity: {donation.quantity}</Card.Text>
          <Button variant="danger" onClick={() => handleDelete(donation.id)}>Delete</Button>
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <Container>
      <Row>{donationCards}</Row>
    </Container>
  );
}

export default Donations;
