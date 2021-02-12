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
            <Link> Entries</Link>
          </li>
          <li>
            <Link> Breakdown</Link>
          </li>
        </ul>
      </Navbar>
    </div>
  );
}

export default NavBar;
