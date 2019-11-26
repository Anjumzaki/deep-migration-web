import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';
import './Nav.css'

const MyNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md">
        <NavbarBrand className="navLogo" href="/" > <img className="nav_Logo" src={require('./assets/logo.png')}/> </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login">Deep Wallet</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login">Deep Token Migration</NavLink>
            </NavItem>
            <NavItem>
              <Button className="specMyBtn">Login to Wallet</Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavbar;