import React from 'react';
import { Nav, Navbar, NavLink } from 'react-bootstrap';
import "./index.css"
const NavBar = () => {
  return (
    <Navbar className='navbar'>
        <Nav className="navbar-nav">
          <NavLink href='/' className="nav-link">
            Home
          </NavLink>
          <NavLink href="/about" className="nav-link">
            Resume
          </NavLink>
          <NavLink href="/contact" className="nav-link">
            Contact
          </NavLink>
        </Nav>
    </Navbar>
  );
}

export default NavBar;