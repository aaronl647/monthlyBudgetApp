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

  // SLIDER VALUES //
  getSliderGValue = (e) => {
    const newValue = e.target.valueAsNumber;
    this.setState({ gValue: newValue });
  };

  getSliderSValue = (e) => {
    const newValue = e.target.valueAsNumber;
    this.setState({ sValue: newValue });
  };

  getSliderIValue = (e) => {
    const newValue = e.target.valueAsNumber;
    this.setState({ iValue: newValue });
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

  gfs = () => {
    let gPercentage = this.state.gValue;
    let gTotal = (gPercentage / 100) * this.remainder();
    return gTotal.toFixed(2);
  };

  savings = () => {
    let sPercentage = this.state.sValue;
    let sTotal = (sPercentage / 100) * this.remainder();
    return sTotal.toFixed(2);
  };

  investments = () => {
    let iPercentage = this.state.iValue;
    let iTotal = (iPercentage / 100) * this.remainder();
    return iTotal.toFixed(2);
  };

  render() {
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
                      this.getSliderGValue(e);
                    }}
                  />
                </div>
              </div>
              <div>
                <h4>Savings</h4>
                <div>{this.props.render({ savings: this.savings() })}</div>
                <div className="slider-component">
                  <Slider
                    value={this.state.sValue}
                    onChange={(e) => {
                      this.getSliderSValue(e);
                    }}
                  />
                </div>
              </div>
              <div>
                <h4>Investments</h4>
                <div>
                  {this.props.render({ investments: this.investments() })}
                </div>
                <div className="slider-component">
                  <Slider
                    value={this.state.iValue}
                    onChange={(e) => {
                      this.getSliderIValue(e);
                    }}
                  />
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    );
  }
}
