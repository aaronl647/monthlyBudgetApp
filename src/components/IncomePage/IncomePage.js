import React from "react";
// import FormButton from "../FormButton/FormButton";
import "./IncomePage.css";
import IncomeForm from "../IncomeForm/IncomeForm";
import IncomeSummary from "../IncomeSummary/IncomeSummary";
import budgetService from "../../utils/budgetService";
import { Figure } from "react-bootstrap";
import { Link } from "react-router-dom";

function IncomePage() {
  const totalIncome = () => {
    budgetService
      .income()
      .then((res) => {
        return res;
      })
      .then((income) => {
        var amountArr = [];
        income.forEach((item) => {
          amountArr.push(item.amount);
          var sum = amountArr.reduce((a, b) => a + b);
          return sum;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="income-container">
      <h1>Income</h1>
      <h2>${totalIncome()}</h2>
      <div className="incomeAdd-container">
        <IncomeForm />
      </div>

      <IncomeSummary />
      <div className="next-button">
        <Link to="/expense">
          <Figure>
            <Figure.Caption>
              <i class="fas fa-arrow-right" />
            </Figure.Caption>
            <Figure.Caption>Next Page</Figure.Caption>
          </Figure>
        </Link>
      </div>
    </div>
  );
}

export default IncomePage;
