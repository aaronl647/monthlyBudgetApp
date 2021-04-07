import React, { Component } from "react";
import budgetService from "../../utils/budgetService";
import "./SummarySection.css";
// import myFunctions from "../../utils/myFunctions";

export default class SummarySection extends Component {
  constructor() {
    super();

    this.state = {
      income: [],
      expense: [],
      incomeTotal: 0,
      expenseTotal: 0,
      remainder: 0,
    };
  }
  componentDidMount() {
    budgetService.income().then((income) => {
      let result = income.map((a) => a.amount);
      this.setState({ income: result });
    });

    budgetService.expense().then((expense) => {
      let result = expense.map((a) => a.amountDue);
      this.setState({ expense: result });
    });
  }

  incomeTotal = () => {
    let incTotal = this.state.income.reduce(
      (totalInc, income) => totalInc + income,
      0
    );
    return incTotal;
  };

  expenseTotal = () => {
    const expTotal = this.state.expense.reduce(
      (totalExp, expense) => totalExp + expense,
      0
    );
    return expTotal;
  };

  remainder = () => {
    let difference = this.incomeTotal() - this.expenseTotal();
    return difference;
  };

  render() {
    const { incomeTotal, expenseTotal } = this.state;

    return (
      <div className="summary-section">
        <div>
          <h4>Income</h4>
          <div>{this.props.render({ incomeTotal: this.incomeTotal() })}</div>
        </div>
        <div>
          <h4>Expense</h4>
          <div>{this.props.render({ expenseTotal: this.expenseTotal() })}</div>
        </div>
        <div>
          <h4>Remainder</h4>
          <div>{this.props.render({ remainder: this.remainder() })}</div>
        </div>
      </div>
    );
  }
}
