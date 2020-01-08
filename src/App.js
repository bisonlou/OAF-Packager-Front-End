import React, { Component } from 'react';
import Main from './layout/main';
import { useAuth0 } from "./react-auth0-spa";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const App = () => {

  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Main} />
      </Switch>
    </Router>
  )
}

export default App;
