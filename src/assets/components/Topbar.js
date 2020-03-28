import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
  Button
} from 'reactstrap';

const Topbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar className="topbar" sticky={'top'} dark fixed="true" expand="lg">
        <div><NavbarBrand><img src={require('../images/a_logo.ico')} width="30" height="30" alt="Natural Logo"/></NavbarBrand></div>
        <NavbarBrand href="/">Natural Selection</NavbarBrand>
        <NavbarToggler onClick={toggle} className="mr-2" />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
                <Link to="/Home">Home</Link>
            </NavItem>
            <NavItem>
                <Link to="/Menu">Menu</Link>
            </NavItem>
            <NavItem>
                <Link to="/Catering">Catering</Link>
            </NavItem>
            <NavItem>
                <Link to="/Contact">Contact</Link>
            </NavItem>
          </Nav>
          {!props.myState.isLogin ?
           <Link ><Button onClick={props.open}>Login/Register</Button></Link>
             :
             <Link ><Button>Hello, {props.myState.username}!</Button></Link>
             }
          
        </Collapse>
      </Navbar>
  );
}

export default Topbar;