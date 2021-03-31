import React from "react";
import FormButton from "../FormButton/FormButton";
import "./IncomePage.css";
import IncomeSummary from "../IncomeSummary/IncomeSummary";

function IncomePage({}) {
  return (
    <div className="income-container">
      <h1>Income</h1>
      <h2>{}</h2>
      <div className="incomeAdd-container">
        <FormButton />
      </div>
      <IncomeSummary />
    </div>
  );
}

export default IncomePage;
