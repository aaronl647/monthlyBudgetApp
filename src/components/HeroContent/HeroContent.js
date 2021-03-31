import React from "react";
import "./HeroContent.css";
import { Button } from "react-bootstrap";

function HeroContent() {
  return (
    <div className="hero-container">
      <div className="title-container">
        <h1>Monthly Budget Tracker</h1>
      </div>
      <div className="content-container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          deleniti, vel architecto nemo, repellendus harum repellat neque id
          eveniet distinctio odit. Distinctio, nam earum. Esse veritatis
          assumenda vel voluptatum optio. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Officia nostrum non dolorem, nihil
          corrupti voluptates ducimus consequatur necessitatibus blanditiis
          deleniti minima atque aliquam cum sit, nesciunt tempore vel provident
          amet!
        </p>
      </div>
      <div className="btn-container">
        <Button variant="success" size="lg" active href="/income">
          Get Started
        </Button>
        <Button variant="secondary" size="lg" active href="/summary">
          View Breakdown
        </Button>
      </div>
    </div>
  );
}

export default HeroContent;
