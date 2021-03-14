import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SignupForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordConf: "",
  };
  handleChange = (e) => {
    this.props.updateMessage("");
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("await goes here");
    } catch (err) {
      console.log(err);
    }
  };

  isFormValid() {
    return !(
      this.state.name &&
      this.state.email &&
      this.state.password === this.state.passwordConf
    );
  }
  render() {
    return (
      <div>
        <header className="header-footer">Sign Up</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={this.state.name}
                name="name"
                onChange={this.handleChange}
              />
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
              />
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={this.state.password}
                name="password"
                onChange={this.handleChange}
              />
              <input
                type="password"
                className="form-control"
                placeholder="Password Confirmation"
                value={this.state.passwordConf}
                name="passwordConf"
                onChange={this.handleChange}
              />
              <input
                name="submit"
                type="button"
                className="btn btn-primary"
                value="Submit"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
