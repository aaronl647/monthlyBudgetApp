import React, { Component } from "react";
import "./Breakdown.css";
import SummarySection from "../SummarySection/SummarySection";
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
        <SummarySection
          render={({
            incomeTotal,
            expenseTotal,
            remainder,
            GFS,
            savings,
            investments,
          }) => (
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
              <div>
                <h5> {GFS}</h5>
              </div>
              <div>
                <h5> {savings}</h5>
              </div>
              <div>
                <h5> {investments}</h5>
              </div>
            </div>
          )}
        />

        <ChartSection />
        <Upcoming />
      </div>
    );
  }
}
