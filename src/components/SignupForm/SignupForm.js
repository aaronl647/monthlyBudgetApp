import React, { Component } from "react";
import userService from "../../utils/userService";
import { Form, Button } from "react-bootstrap";
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
      <div className="signup-container">
        <div className="signup-form">
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
                placeholder="Email"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={this.state.password}
                name="password"
                onChange={this.handleChange}
              />
            </Form.Group>{" "}
            <Form.Group controlId="formBasicPasswordConf">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password Confirmation"
                value={this.state.passwordConf}
                name="passwordConf"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button variant="primary" className="signup-btn" type="submit">
              Sign Up
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
