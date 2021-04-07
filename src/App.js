import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import userService from "./utils/userService";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import LoginPage from "./components/UserPages/LoginPage";
import Signup from "./components/UserPages/Signup";

import Home from "./components/pages/Home";
import Breakdown from "./components/Breakdown/Breakdown";
import ExpensePage from "./components/ExpensePage/ExpensePage";
import IncomePage from "./components/IncomePage/IncomePage";

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
          <Route path="/expense" component={ExpensePage} />
          <Route path="/income" component={IncomePage} />
          <Route path="/breakdown" component={Breakdown} />

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
