import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Header } from './components/Header';

import Preload from './pages/Preload';
import { Home } from './pages/Home';
import { Login } from './pages/Login';

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={Preload} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;