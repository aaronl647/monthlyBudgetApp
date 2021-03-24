import React, { Component } from "react";
import userService from "../../utils/userService";
import { Form } from "react-bootstrap";
import "./SignupForm.css";

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
      await userService.signup(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push("/");
    } catch (err) {
      this.props.updateMessage(err.message);
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
        <h1 className="header-footer">Sign Up</h1>
        <Form className="form-horizontal" onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              value={this.state.name}
              name="name"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="email"
              value={this.state.email}
              name="email"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="password"
              value={this.state.password}
              name="password"
              onChange={this.handleChange}
            />
          </Form.Group>{" "}
          <Form.Group controlId="formBasicPasswordConf">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="password"
              placeholder="passwordConf"
              value={this.state.passwordConf}
              name="passwordConf"
              onChange={this.handleChange}
            />
          </Form.Group>
          <button className="btn btn-default">Sign Up</button>
        </Form>
      </div>
    );
  }
}
