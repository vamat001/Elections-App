import React, { Component } from "react";
import LandingPage from "./components/landingPage.js";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return(
      <Router>
         <Route exact path="/" component={LandingPage} />
      </Router>
   );
  }
}

export default App;
