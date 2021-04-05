import React, { Component } from "react";
import budgetService from "../../utils/budgetService";

export default class SummarySection extends Component {
  constructor() {
    super();

    this.state = {
      income: [],
      expense: [],
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

  incomeTotal() {
    const incTotal = this.state.income.reduce(
      (totalInc, income) => totalInc + income,
      0
    );
    return incTotal;
  }

  expenseTotal() {
    const expTotal = this.state.expense.reduce(
      (totalExp, expense) => totalExp + expense,
      0
    );
    return expTotal;
  }

  remainder() {
    let difference = this.incomeTotal() - this.expenseTotal();
    return difference;
  }

  render() {
    return (
      <div>
        <div>
          <h4>Income</h4>
          <h5>$ {this.incomeTotal()}</h5>
        </div>
        <div>
          <h4>Expense</h4>
          <h5>$ {this.expenseTotal()}</h5>
        </div>
        <h4>Remainder</h4>
        <h5>$ {this.remainder()}</h5>
      </div>
    );
  }
}
