import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import theme from "theme";
import { Main, Login } from "views";
import { PrivateRoute } from "components";
import { AppContainer } from "./App.styles";

const App = () => (
  <ThemeProvider theme={theme}>
    <AppContainer>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/" component={Main} />
        </Switch>
      </Router>
    </AppContainer>
  </ThemeProvider>
);

export default App;
