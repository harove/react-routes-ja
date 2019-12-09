import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import { PrivateRoute } from './components/private-route/PrivateRoute';

import Home from './containers/home/Home';
import Login from './containers/login/Login';
import PrivateHome from './containers/private-home/PrivateHome'

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/private" component={PrivateHome} />
    </Router>
  );
}

export default App;
