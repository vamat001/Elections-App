import React, { Component } from "react";
import LandingPage from "./components/landingPage.js";
import Login from "./components/login.js";
import Dashboard from "./components/dashboard.js";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {

  render() {
    return (
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Router>
    );
  }
}

export default App;
