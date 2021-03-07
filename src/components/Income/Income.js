import React, { Component } from "react";
// import "./Income.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export default class Income extends Component {
  constructor(props) {
    super(props);

    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDateChange = this.onChangeDateChange.bind(this);
    this.onChangeAmount = this.onChangeAmount.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      description: "",
      startDate: new Date(),
      amount: "",
    };
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeDateChange(date) {
    this.setState({ startDate: date });
  }

  onChangeAmount(e) {
    this.setState({ amount: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newIncome = {
      description: this.state.description,
      startDate: this.state.startDate,
      amount: this.state.amount,
    };
    axios
      .post("http://localhost:4000/budget/income/add", newIncome)
      .then((res) => console.log(res.data));

    this.setState({
      description: "",
      startDate: new Date(),
      amount: "",
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Add Income Here</h1>
        <div className="border">
          <form className="income" onSubmit={this.onSubmit}>
            <label>
              Description:
              <input
                className="form-group gform-group-sm"
                type="text"
                value={this.state.description}
                onChange={this.onChangeDescription}
              />
            </label>
            <label>
              Date Received:
              <DatePicker
                selected={this.state.startDate}
                onChange={this.onChangeDateChange}
                name="startDate"
              />
            </label>
            <label>
              Amount:
              <input
                className="form-group gform-group-sm"
                type="number"
                min="0.01"
                step="0.01"
                value={this.state.amount}
                onChange={this.onChangeAmount}
              />
            </label>
            <br />
            <input
              className="btn btn-primary"
              type="submit"
              value="Add Income!"
            />
          </form>
        </div>
      </div>
    );
  }
}
