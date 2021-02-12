import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link, Route } from "react-router-dom";
import HeroContent from "../HeroContent/HeroContent";

function NavBar() {
  return (
    <div className="nav-container">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link to="/">Budget Tracker</Link>
        </Navbar.Brand>
        This is the NavBar
      </Navbar>
    </div>
  );
}

export default NavBar;
