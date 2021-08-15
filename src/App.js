import { Router, Route, Switch } from "react-router-dom";
import React, { useEffect } from "react";
import Home from "./components/Home";
import SignIN from "./components/SignIn";
import history from "./history";
import { connect } from "react-redux";
import { fetch_movies } from "./actions/moviesActions";
import "./App.css";

function App(props) {
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      props.fetch_movies()
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
export default connect(null, {fetch_movies })(App);
