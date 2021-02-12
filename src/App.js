import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/pages/Home";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
