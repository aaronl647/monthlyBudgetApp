import React, { Component } from "react";
import "./Breakdown.css";
import budgetService from "../../utils/budgetService";
import SummarySection from "../SummarySection/SummarySection";
export default class Breakdown extends Component {
  render() {
    return (
      <div>
        <h1>Breakdown</h1>
        <h2>General Breakdown</h2>
        <div className="summary-section">
          <SummarySection />
        </div>
        <h2>Detailed Breakdown</h2>
        <div className="detailed-breakdown">
          <h4>Guilt-Free Spending</h4>
          <h4>Savings</h4>
          <h4>Investments</h4>
        </div>
        <div className="chart-container">
          <h2>Charts </h2>
        </div>
        <div className="upcoming-container">
          <h2>Upcoming Payments </h2>
        </div>
      </div>
    );
  }
}
