import React, { Component } from "react";
import userService from "./utils/userService";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import LoginPage from "./components/UserPages/LoginPage";
import Signup from "./components/UserPages/Signup";
import Home from "./components/pages/Home";
import Summary from "./components/pages/Summary/Summary";
import { Switch, Route } from "react-router-dom";

import Expense from "./components/Expense/Expense";
import Income from "./components/Income/Income";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
    };
  }
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  render() {
    return (
      <div className="App">
        <NavBar user={this.state.user} handleLogout={this.handleLogout} />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/expense" component={Expense} />
          <Route path="/income" component={Income} />
          <Route path="/summary" component={Summary} />
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <Signup
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}
