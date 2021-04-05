import React, { Component } from "react";
import budgetService from "../../utils/budgetService";

export default class SummarySection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalIncome: budgetService.totalInc(),
      totalExpense: budgetService.totalExp(),
    };
  }
  componentDidMount() {
    this.setState({
      totalIncome: budgetService.totalInc(),
    });
  }
  render() {
    return (
      <div>
        <h4>Income</h4>
        <div>
          <h5>{this.totalIncome()}</h5>
        </div>
        <h4>Expense</h4>
        <h4>Remainder</h4>
      </div>
    );
  }
}
