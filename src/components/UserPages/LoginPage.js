import React, { Component } from "react";
import userService from "../../utils/userService";

export default class LoginPage extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push("/");
    } catch (err) {
      alert("Invalid Credentials!");
    }
  };

  render() {
    return (
      <div className="login-page">
        <header>Login Here</header>
        <form className="form-container" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="email"
              placeholder="name@email.com"
              value={this.state.email}
              name="email"
              onChange={this.handleChange}
            />
            <input
              type="password"
              className="password"
              placeholder="password"
              value={this.state.password}
              name="password"
              onChange={this.handleChange}
            />
            <button className="btn btn-primary" type="submit">
              Log In
            </button>
          </div>
        </form>
      </div>
    );
  }
}
