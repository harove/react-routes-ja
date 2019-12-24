import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import "./App.css";

import { PrivateRoute } from "./components/private-route/PrivateRoute";

import Home from "./containers/home/Home";
import Login from "./containers/login/Login";
import PrivateHome from "./containers/private-home/PrivateHome";
import routes from "./routes";
import NotFound from './containers/not-found/NotFound';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path={routes.home} exact component={Home} />
        <Route path={routes.login} component={Login} />
        <PrivateRoute path={routes.PrivateHome} component={PrivateHome} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
