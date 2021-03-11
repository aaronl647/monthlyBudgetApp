import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import VerifyDelete from "../VerifyDelete/VerifyDelete";

const Exp = (props) => (
  <tr>
    <td>{props.item.description}</td>
    <td>{moment(props.item.startDate).format("dddd MMMM D, YYYY")}</td>
    <td>{props.item.amountDue}</td>
    <td>{props.item.paymentOption}</td>
    <td>{props.item.occurance}</td>
    <td>
      <Link to={"/edit/" + props.item._id}>Edit</Link>
      <br />
      <Link to={"/delete/" + props.item._id} component={VerifyDelete}>
        Delete{" "}
      </Link>
    </td>
  </tr>
);

export default class ExpenseSummary extends Component {
  constructor(props) {
    super(props);
    this.toggleSortDate = this.toggleSortDate.bind(this);
    this.state = {
      expense: [],
      isOldestFirst: true,
    };
  }

  sortByDate() {
    const { expense } = this.state;
    var newDate = expense;
    if (this.state.isOldestFirst) {
      newDate = expense.sort((a, b) => a.startDate < b.startDate);
    } else {
      newDate = expense.sort((a, b) => a.startDate > b.startDate);
    }
    this.setState({
      isOldestFirst: !this.state.isOldestFirst,
      expense: newDate,
    });
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/budget/expense")
      .then((result) => {
        this.setState({ expense: result.data, isOldestFirst: true });
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  expenseList() {
    return this.state.expense.map(function (currentExp, i) {
      return <Exp item={currentExp} key={i} />;
    });
  }

  toggleSortDate(e) {
    this.sortByDate();
  }

  render() {
    return (
      <div>
        <table
          className="table table-striped"
          style={{ marginTop: 20, alignItems: "center" }}
        >
          <thead>
            <tr>
              <th>Description</th>
              <th>
                <Link onClick={this.toggleSortDate}>Due Date</Link>
              </th>
              <th>Amount Due</th>
              <th>Payment Option</th>
              <th>Occurance</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>{this.expenseList()}</tbody>
        </table>
      </div>
    );
  }
}
