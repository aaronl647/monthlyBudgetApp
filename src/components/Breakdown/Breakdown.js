import React, { Component } from "react";
import "./Breakdown.css";
import SummarySection from "../SummarySection/SummarySection";
import DetailedSection from "../DetailedSection/DetailedSection";
import ChartSection from "../ChartSection/ChartSection";
import Upcoming from "../Upcoming/Upcoming";

export default class Breakdown extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const totalIncome = budgetService.totalInc();
    return (
      <div>
        <h1>Breakdown</h1>
        <h2>General Breakdown</h2>
        <div className="summary-section">
          <SummarySection totalIncome={this.props.totalIncome} />
        </div>
        <h2>Detailed Breakdown</h2>
        <div className="detailed-breakdown">
          <DetailedSection />
        </div>
        <div className="chart-container">
          <ChartSection />
        </div>
        <div className="upcoming-container">
          <Upcoming />
        </div>
      </div>
    );
  }
}

//totalIncome = (props) => {
//   budgetService
//     .income()
//     .then((res) => {
//       return res;
//     })
//     .then((income) => {
//       var arr = [];
//       for (var item in income) {
//         var data = income[item];
//         var amount = data.amount;
//         arr.push(amount);
//       }
//       let sum = arr.reduce((a, b) => a + b, 0);
//       return sum;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
