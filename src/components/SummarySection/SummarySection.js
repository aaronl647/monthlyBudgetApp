import React, { Component } from "react";
import budgetService from "../../utils/budgetService";
import "./SummarySection.css";
// import incomeTotal from "../../utils/myFunctions";
import Slider from "../Slider/Slider";

export default class SummarySection extends Component {
  constructor() {
    super();

    this.state = {
      income: [],
      expense: [],
      incomeTotal: 0,
      expenseTotal: 0,
      remainder: 0,
      GFS: 0,
      savings: 0,
      investments: 0,
      gValue: 0,
      sValue: 0,
      iValue: 0,
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
  getSliderNumber = (e) => {
    const newValue = e.target.valueAsNumber;
    console.log(newValue);
    this.setState({ gValue: newValue });
  };

  getPercentage = (x, y) => {
    let percentage = (x / y) * 100;
    return percentage;
  };

  incomeTotal = () => {
    let incTotal = this.state.income.reduce(
      (totalInc, income) => totalInc + income,
      0
    );
    return incTotal.toFixed(2);
  };

  expenseTotal = () => {
    const expTotal = this.state.expense.reduce(
      (totalExp, expense) => totalExp + expense,
      0
    );
    return expTotal.toFixed(2);
  };

  remainder = () => {
    let difference = this.incomeTotal() - this.expenseTotal();
    return difference.toFixed(2);
  };

  gfs = () => {};

  render() {
    const { value, onChange } = this.props;
    return (
      <div className="summary-container">
        <h1>Breakdown</h1>
        <>
          <h1>Summary</h1>
          <div className="detailed-section">
            <div>
              <h4>Income</h4>
              <div>
                {this.props.render({ incomeTotal: this.incomeTotal() })}
              </div>
            </div>
            <div>
              <h4>Expense</h4>
              <div>
                {this.props.render({ expenseTotal: this.expenseTotal() })}
              </div>
            </div>
            <div>
              <h4>Remainder</h4>
              <div>{this.props.render({ remainder: this.remainder() })}</div>
            </div>
          </div>
        </>
        <div>
          <>
            <h1>Detailed Breakdown</h1>
            <div className="detailed-section">
              <div>
                <h4>Guilt Free Spending</h4>
                <div>{this.props.render({ GFS: this.gfs() })}</div>
                <div className="slider-component">
                  <Slider
                    value={this.state.gValue}
                    onChange={(e) => {
                      this.getSliderNumber(e);
                    }}
                  />
                  {value}
                </div>
              </div>
              <div>
                <h4>Savings</h4>
                <div>{this.props.render({ savings: this.expenseTotal() })}</div>
                <div className="slider-component">
                  <Slider />
                </div>
              </div>
              <div>
                <h4>Investments</h4>
                <div>
                  {this.props.render({ investments: this.remainder() })}
                </div>
                <div className="slider-component">
                  <Slider />
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    );
  }
}
