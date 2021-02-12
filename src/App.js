import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/pages/Home";
import Entries from "./components/pages/Entries";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/entries" component={Entries} />
      </Switch>
    </div>
  );
}

export default App;
