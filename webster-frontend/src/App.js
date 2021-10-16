import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './components/HomePage.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = "/tinderCards">
            <h1>login successful</h1>
          </Route>
          <Route path = "/login">
            <Login />
          </Route>
          <Route path = "/register">
            <Register />
          </Route>
          <Route path = "/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
