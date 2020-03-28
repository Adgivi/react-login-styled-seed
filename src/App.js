import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { Main, Login } from "./views";
import { PrivateRoute } from "./components";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/" component={Main} />
      </Switch>
    </Router>
  );
};

export default App;
