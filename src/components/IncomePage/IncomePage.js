import React from "react";
import FormButton from "../FormButton/FormButton";
import "./IncomePage.css";
import IncomeSummary from "../IncomeSummary/IncomeSummary";
import budgetService from "../../utils/budgetService";

function IncomePage() {
  const totalIncome = (amount) => {
    console.log(budgetService.income(amount));
  };

  return (
    <div className="income-container">
      <h1>Income</h1>
      <h2>${totalIncome()}</h2>
      <div className="incomeAdd-container">
        <FormButton />
      </div>
      <IncomeSummary />
    </div>
  );
}

export default IncomePage;
