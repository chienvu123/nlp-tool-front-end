import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import MainApp from "containers/MainApp";
import Notfound from "../containers/NotFound";
const Routing = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={MainApp} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

export default Routing;
