// Form will be shown here, user will be able to add everything they need to
import React, { Component } from "react";

import "./ExpenseForm.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export default class Expense extends Component {
  constructor(props) {
    super(props);

    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDateChange = this.onChangeDateChange.bind(this);
    this.onChangeAmountDue = this.onChangeAmountDue.bind(this);
    this.onChangePaymentOption = this.onChangePaymentOption.bind(this);
    this.onChangeOccurance = this.onChangeOccurance.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      description: "",
      startDate: new Date(),
      amountDue: "",
      paymentOption: "",
      occurance: "",
    };
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }
  onChangeAmountDue(e) {
    this.setState({
      amountDue: e.target.value,
    });
  }
  onChangePaymentOption(e) {
    this.setState({
      paymentOption: e.target.value,
    });
  }
  onChangeOccurance(e) {
    this.setState({
      occurance: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const newExpense = {
      description: this.state.description,
      startDate: this.state.startDate,
      amountDue: this.state.amountDue,
      paymentOption: this.state.paymentOption,
      occurance: this.state.occurance,
    };

    axios
      .post("http://localhost:4000/budget/expense/add", newExpense)
      .then((res) => console.log(res.data));

    this.setState({
      description: "",
      startDate: new Date(),
      amountDue: "",
      paymentOption: "",
      occurance: "",
    });
  }

  onChangeDateChange(date) {
    this.setState({ startDate: date });
  }

  render() {
    return (
      <div className="container">
        <div className="border">
          <form className="expense-form" onSubmit={this.onSubmit}>
            <label>
              Description:
              <input
                className="form-group gform-group-sm"
                type="text"
                value={this.state.description}
                onChange={this.onChangeDescription}
                required
              />
            </label>
            <label>
              Due Date:
              <DatePicker
                selected={this.state.startDate}
                onChange={this.onChangeDateChange}
                name="startDate"
                required
              />
            </label>
            <label>
              Amount:
              <input
                className="form-group gform-group-sm"
                type="number"
                min="0.01"
                step="0.01"
                value={this.state.amountDue}
                onChange={this.onChangeAmountDue}
                required
              />
            </label>
            <label>
              Payment Option:
              <input
                className="form-group gform-group-sm"
                type="text"
                value={this.state.paymentOption}
                onChange={this.onChangePaymentOption}
                required
              />
            </label>
            <label>
              Occurance
              <select
                className="occurance"
                value={this.state.occurance}
                onChange={this.onChangeOccurance}
                required
              >
                <option value="weekly">Weekly</option>
                <option value="bi-weekly">Bi-Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="other">Other</option>
              </select>
            </label>
            <br />
            <input
              className="btn btn-primary"
              type="submit"
              value="Add Expense!"
            />
          </form>
        </div>
      </div>
    );
  }
}
