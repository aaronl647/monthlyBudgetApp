import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/pages/Home";
import Entries from "./components/pages/Entries";
import Summary from "./components/pages/Summary";
import { Switch, Route } from "react-router-dom";
import Login from "./components/UserPages/Login";
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

  handleSignup = () => {
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
          <Route path="/login" component={Login} />
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <Signup history={history} handleSignup={this.handleSignup} />
            )}
          />
          <Route path="/delete" component={VerifyDelete} />
        </Switch>
      </div>
    );
  }
}
