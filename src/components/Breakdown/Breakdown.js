import React from "react";
import "./Breakdown.css";

function Breakdown() {
  return (
    <div>
      <h1>Breakdown</h1>
      <h2>General Breakdown</h2>
      <div className="summary-section">
        <h4>Income</h4>
        <h4>Expense</h4>
        <h4>Remainder</h4>
      </div>
      <h2>Detailed Breakdown</h2>
      <div className="detailed-breakdown">
        <h4>Guilt-Free Spending</h4>
        <h4>Savings</h4>
        <h4>Investments</h4>
      </div>
    </div>
  );
}

export default Breakdown;
