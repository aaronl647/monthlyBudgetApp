import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/pages/Home";
import Entries from "./components/pages/Entries";
import Summary from "./components/pages/Summary";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./components/UserPages/LoginPage";
import Signup from "./components/UserPages/Signup";
import VerifyDelete from "./components/VerifyDelete/VerifyDelete";
import userService from "./utils/userService";

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
          <Route path="/entries" component={Entries} />
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
          <Route path="/delete" component={VerifyDelete} />
        </Switch>
      </div>
    );
  }
}
