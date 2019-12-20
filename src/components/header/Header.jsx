import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

import {NavLink as RRNavLink} from 'react-router-dom';


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Mi empresa</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              
            </NavItem>
            <NavItem>
              <NavLink href="/login">Login</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
          <NavLink tag={RRNavLink} exact to="/" activeClassName="active">Home</NavLink>
          <NavLink tag={RRNavLink} exact to="/login" activeClassName="active">Login</NavLink>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;