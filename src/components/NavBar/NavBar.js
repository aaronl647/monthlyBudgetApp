import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-container">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link to="/">Budget Tracker</Link>
        </Navbar.Brand>
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
            <Link to="/login"> Log In</Link>
          </li>
          <li>
            <Link to="/signup"> Sign Up</Link>
          </li>
        </ul>
      </Navbar>
    </div>
  );
}

export default NavBar;
