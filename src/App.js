import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";

import theme from "theme";
import { UserList, UserDetail, Login } from "views";
import { PrivateRoute } from "components";
import { AppContainer } from "./App.styles";

const App = () => (
  <ThemeProvider theme={theme}>
    <AppContainer>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/users" component={UserList} />
          <PrivateRoute exact path="/users/detail/:id" component={UserDetail} />
          <Redirect from="/" to="/users" />
        </Switch>
      </Router>
    </AppContainer>
  </ThemeProvider>
);

export default App;
