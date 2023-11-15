import React from 'react';
import { Nav, Navbar, NavLink } from 'react-bootstrap';
import "./index.css"
const NavBar = () => {
  return (
    <Navbar className='navbar'>
        <Nav className="navbar-nav">
          <NavLink href='/home' className="nav-link">
            Home
          </NavLink>
          <NavLink href="/about" className="nav-link">
            About
          </NavLink>
          <NavLink href="/contact" className="nav-link">
            Contact
          </NavLink>
        </Nav>
    </Navbar>
  );
}

export default NavBar;