import { Fragment } from "react";
import { Nav, Navbar, Container } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

function NavBar() {

    return (
        <Fragment>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">DonateIt</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/eventsavailable">Charities</Nav.Link>
            <Nav.Link href="/addevent">View Donations</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </Fragment>
      );
}

export default NavBar;