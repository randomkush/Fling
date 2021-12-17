import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import TinderCards from './components/TinderCards.js';
import Header from './components/Header.js';
import Feed from './components/Feed.js';
import Profile from './components/Profile.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = "/feed">
            <Feed />
          </Route>
          <Route path = "/tinderCards">
            <Header />
            <TinderCards />
          </Route>
          <Route path = "/login">
            <Login />
          </Route>
          <Route path = "/register">
            <Register />
          </Route>
          <Route path = "/profile">
            <Profile />
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
