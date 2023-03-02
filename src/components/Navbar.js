// import React, { Component, Fragment } from "react";
// import { Nav, Navbar, Container } from 'react-bootstrap';
// import { Menu, Segment } from 'semantic-ui-react'
// // import Container from 'react-bootstrap/Container';
// // import Nav from 'react-bootstrap/Nav';
// // import Navbar from 'react-bootstrap/Navbar';

// function NavBar() {
//   state = { activeItem: 'home' }

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })
//   const { activeItem } = this.state

//     return (
//         <Fragment>
//         {/* <Navbar bg="dark" variant="dark">
//         <Container>
//           <Navbar.Brand href="/">Donate-It</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="/">Home</Nav.Link>
//             <Nav.Link href="/allcharities">Charities</Nav.Link>
//             <Nav.Link href="/donations">View Donations</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar> */}

      
//         </Fragment>
//       );
// }

// export default NavBar;

import React, { useState, Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react'

export default function NavBar() {
  // state = { activeItem: 'home' }
  const [activeItem, setactiveItem] = useState("home");

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  const handleItemClick = (e, { name }) => setactiveItem(name)

  
    // const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
        <Menu.Item
            name='logo'
            active={activeItem === 'logo'}
            onClick={handleItemClick}
            href="/"
          >
            <img src="https://images.unsplash.com/photo-1460013477427-b0cce3e30151?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"  alt="" />
          </Menu.Item>
          {/* <Menu.Item
            name='Home'
            active={activeItem === 'Home'}
            onClick={handleItemClick}
            href="/home"
          /> */}
          <Menu.Item
            name='Charities'
            active={activeItem === 'Charities'}
            onClick={handleItemClick}
            href="/charities"
          />
          <Menu.Item
            name='Donations'
            active={activeItem === 'Donations'}
            onClick={handleItemClick}
            href="/donations"
          />
        </Menu>
      </Segment>
    )
  
}
