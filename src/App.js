import { Router, Route, Switch } from "react-router-dom";
import React, { useEffect } from "react";
import Home from "./components/Home";
import SignIN from "./components/SignIn";
import history from "./history";

import "./App.css";

function App() {
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      history.push("/home");
    } else {
      history.push("/");
    }
  }, []);
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={SignIN} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
