import React, { Component } from "react";
import "./IncomeSummary.css";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const Inc = (props) => (
  <tr>
    <td>{props.item.description}</td>
    <td>{moment(props.item.startDate).format("dddd MMMM D, YYYY")}</td>
    <td>{props.item.amount}</td>
    <td>
      <Link to={"/edit/" + props.item._id}>Edit</Link>
      <br />
      <Link to={"/delete/" + props.item._id}>Delete </Link>
    </td>
  </tr>
);

export default class IncomeSummary extends Component {
  constructor(props) {
    super(props);
    this.toggleSortDate = this.toggleSortDate.bind(this);
    this.state = {
      income: [],
      isOldestFirst: true,
    };
  }

  sortByDate() {
    const { income } = this.state;
    var newDate = income;
    if (this.state.isOldestFirst) {
      newDate = income.sort((a, b) => a.startDate < b.startDate);
    } else {
      newDate = income.sort((a, b) => a.startDate > b.startDate);
    }
    this.setState({
      isOldestFirst: !this.state.isOldestFirst,
      income: newDate,
    });
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/budget/income")
      .then((result) => {
        this.setState({ income: result.data, isOldestFirst: true });
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  incomeList() {
    return this.state.income.map(function (currentInc, i) {
      return <Inc item={currentInc} key={i} />;
    });
  }

  toggleSortDate(e) {
    this.sortByDate();
  }

  render() {
    return (
      <div className="income-summary-container">
        <table
          className="table table-striped"
          style={{ marginTop: 20, alignItems: "center" }}
        >
          <thead>
            <tr>
              <th>Description</th>
              <th>
                <Link onClick={this.toggleSortDate}>Pay Date</Link>
              </th>
              <th>Amount</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>{this.incomeList()}</tbody>
        </table>
      </div>
    );
  }
}
