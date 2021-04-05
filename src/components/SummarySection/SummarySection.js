import React, { Component } from "react";
import budgetService from "../../utils/budgetService";

export default class SummarySection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalIncome: "",
      totalExpense: "",
    };
  }

  render() {
    return (
      <div>
        <h4>Income</h4>
        <div>
          <h5>{}</h5>
        </div>
        <h4>Expense</h4>
        <div>
          <h5>{}</h5>
        </div>
        <h4>Remainder</h4>
      </div>
    );
  }
}

//  var totalInc = () => {
//    budgetService.income().then((income) => {
//      let result = income.map((a) => a.amount);
//      const reducer = (acc, currentValue) => acc + currentValue;
//      let total = result.reduce(reducer);
//      console.log(total);
//      return <p>{total}</p>;
//    });
//  };

//  var totalExp = () => {
//    budgetService.expense().then((expense) => {
//      let result = expense.map((a) => a.amountDue);
//      const reducer = (acc, currentValue) => acc + currentValue;
//      let total = result.reduce(reducer);
//      console.log(total);
//    });
//  };
