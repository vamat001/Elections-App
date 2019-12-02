import React, { Componenet } from "react";
import President from "./president.js";
import Senator from "./senator.js";
import VicePresident from "./vicepresident.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class CanRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/candidates/president" component={President} />
          <Route
            exact
            path="/candidates/vicepresident"
            component={VicePresident}
          />
          <Route exact path="/candidates/senator" component={Senator} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default CanRouter;
