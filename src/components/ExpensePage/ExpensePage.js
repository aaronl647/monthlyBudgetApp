import React from "react";
import FormButton from "../FormButton/FormButton";
import "./ExpensePage.css";
import ExpenseSummary from "../ExpenseSummary/ExpenseSummary";
import budgetService from "../../utils/budgetService";
import { Figure } from "react-bootstrap";
import { Link } from "react-router-dom";

function ExpensePage() {
  const totalExpense = () => {
    budgetService
      .expense()
      .then((res) => {
        return res;
      })
      .then((expense) => {
        var amountArr = [];
        expense.forEach((item) => {
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
    <div className="expense-container">
      <h1>Expense</h1>
      <h2>${totalExpense()}</h2>
      <div className="expenseAdd-container">
        <FormButton />
      </div>

      <ExpenseSummary />
      <div className="navigation-buttons">
        <Link to="/income">
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src="holder.js/171x180"
            />
            <Figure.Caption>Go Back</Figure.Caption>
          </Figure>
        </Link>

        <Link to="/summary">
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src="holder.js/171x180"
            />
            <Figure.Caption>Next Page</Figure.Caption>
          </Figure>
        </Link>
      </div>
    </div>
  );
}

export default ExpensePage;
