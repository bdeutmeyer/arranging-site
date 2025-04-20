//Navbar

import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
} from 'reactstrap';
import { useState } from 'react';

export default function NavBar({ links }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar expand="sm" className="nav-section shadow py-1 px-5 sticky-top z-3 bg-white container-fluid" >
      <NavbarToggler onClick={toggle} className="ms-auto me-2" />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="d-flex flex-row justify-content-between align-items-center w-100" navbar>
          {links.map((link, index) => (
            <NavItem key={index} className="navitem mx-2">
              {link}
            </NavItem>
          ))}
        </Nav>
      </Collapse>
    </Navbar>
  );
};