import React, { Component } from 'react';
import Main from './layout/main';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Main} />
        </Switch>
      </Router>
    )
  }
}

export default App;
