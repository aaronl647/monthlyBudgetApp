import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  let nav = props.user ? (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link to="/">Budget Tracker</Link>
        </Navbar.Brand>
        <span className="welcome">Welcome back, {props.user.name}!</span>
        <ul>
          <li>
            <Link to="/entries"> Entries</Link>
          </li>
          <li>
            <Link to="/breakdown"> Breakdown</Link>
          </li>
          <li>
            <Link to="/summary"> Summary</Link>
          </li>
          <li>
            <Link to="" className="Navbar-link" onClick={props.handleLogout}>
              Log Out
            </Link>
          </li>
        </ul>
      </Navbar>
    </div>
  ) : (
    <div>
      <li>
        <Link to="/login"> Log In</Link>
      </li>
      <li>
        <Link to="/signup"> Sign Up</Link>
      </li>
    </div>
  );

  return <div className="nav-container"> {nav}</div>;
};

export default NavBar;
