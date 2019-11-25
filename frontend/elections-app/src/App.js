import React, { Component } from "react";
import landingPage from "./components/landingPage.js";
import forms from "./components/forms.js";
import referendums from "./components/referendums.js";
import positions from "./components/positions.js";
import candidates from "./components/candidates.js";
import login from "./components/login.js";
import dashboard from "./components/dashboard.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={landingPage} />
          <Route exact path="/login" component={login} />
          <Route exact path="/forms" component={forms} />
          <Route exact path="/referendums" component={referendums} />
          <Route exact path="/candidates" component={candidates} />
          <Route exact path="/positions" component={positions} />
          <Route exact path="/dashboard" component={dashboard} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
