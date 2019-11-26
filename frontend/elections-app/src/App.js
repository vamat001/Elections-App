import React, { Component } from "react";
import landingPage from "./components/landingPage.js";
import forms from "./components/forms.js";
import referendums from "./components/referendums.js";
import positions from "./components/positions.js";
import candidates from "./components/candidates.js";
import login from "./components/login.js";
import dashboard from "./components/dashboard.js";
import Admin from "./components/admin.js";
import ChangeCandidates from "./components/changeCandidates.js";
import ChangeReferendums from "./components/changeReferendums.js";
import ApproveCandidates from "./components/approveCandidates.js";

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
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/UpdateCandidates" component={ChangeCandidates} />
          <Route exact path="/ChangeReferendums" component={ChangeReferendums} />
          <Route exact path="/ApproveCandidates" component={ApproveCandidates} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
