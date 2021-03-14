import React, { Component } from "react";
import SignupForm from "./SignupForm";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };
  }
  updateMessage = (msg) => {
    this.setState({ message: msg });
  };
  render() {
    return (
      <div className="signup-page">
        <SignupForm {...this.props} updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>
      </div>
    );
  }
}
