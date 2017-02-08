import React from 'react';
import { Link } from 'react-router';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';
import { Nav, Navbar, NavItem } from 'react-bootstrap/lib';

const App = props => (
  <div>
    <Navbar>

      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Youtube Finder</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>

      <Navbar.Collapse>
        <Nav navbar>
          <LinkContainer to="/year">
            <NavItem>Top videos of the year</NavItem>
          </LinkContainer>
          <LinkContainer to="/location">
            <NavItem>Search by location</NavItem>
          </LinkContainer>
          <LinkContainer to="/live">
            <NavItem>Most viewed Broadcasts</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
    {props.children}
  </div>
);

export default App;
