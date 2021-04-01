import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
  let nav = props.user ? (
    <div>
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand>
          <Link to="/">Budget Tracker</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <span className="welcome-user">Welcome back, {props.user.name}!</span>

          <Nav className="mr-auto">
            <NavDropdown title="Entries">
              <NavDropdown.Item href="/expense">Expenses</NavDropdown.Item>
              <NavDropdown.Item href="/income">Incomes</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/breakdown"> Breakdown</Nav.Link>
            <Nav.Link href="/summary"> Summary</Nav.Link>
            <Nav.Link
              href="/"
              className="Navbar-link"
              onClick={props.handleLogout}
            >
              Log Out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  ) : (
    <div>
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand>
          <Link to="/">Budget Tracker</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Link to="/login"> Log In</Nav.Link>
          <Nav.Link to="/signup"> Sign Up</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );

  return <div className="nav-container"> {nav}</div>;
};

export default NavBar;
