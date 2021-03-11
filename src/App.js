import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/pages/Home";
import Entries from "./components/pages/Entries";
import Summary from "./components/pages/Summary";
import { Switch, Route } from "react-router-dom";
import Login from "./components/UserPages/Login";
import Signup from "./components/UserPages/Signup";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/entries" component={Entries} />
        <Route path="/summary" component={Summary} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
