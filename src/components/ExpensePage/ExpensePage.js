import React from "react";
import "./ExpensePage.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
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
        <ExpenseForm />
      </div>

      <ExpenseSummary />
      <div className="navigation-buttons">
        <Link to="/income">
          <Figure>
            <Figure.Caption>Go Back</Figure.Caption>
          </Figure>
        </Link>

        <Link to="/breakdown">
          <Figure>
            <Figure.Caption>Next Page</Figure.Caption>
          </Figure>
        </Link>
      </div>
    </div>
  );
}

export default ExpensePage;
