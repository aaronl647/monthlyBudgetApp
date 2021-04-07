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
    return (
      <div>
        <h1>Breakdown</h1>
        <h2>Summary</h2>
        <SummarySection
          render={({ incomeTotal, expenseTotal, remainder }) => (
            <div>
              <div>
                <h5>{incomeTotal}</h5>
              </div>
              <div>
                <h5>{expenseTotal}</h5>
              </div>
              <div>
                <h5> {remainder}</h5>
              </div>
            </div>
          )}
        />

        <h2>Detailed Breakdown</h2>
        <DetailedSection />
        <ChartSection />
        <Upcoming />
      </div>
    );
  }
}
