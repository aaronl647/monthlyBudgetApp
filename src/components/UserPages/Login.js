import React, { Component } from "react";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  handleSubmit = (e) => {
    console.log("submitted");
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
            />
            <input
              type="password"
              className="password"
              placeholder="password"
              value={this.state.password}
              name="password"
            />
            <input
              type="button"
              className="btn btn-primary"
              value="Log In"
              name="login"
            />
          </div>
        </form>
      </div>
    );
  }
}
