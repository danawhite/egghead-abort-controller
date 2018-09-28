import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Voting from './views/Voting'

import { controller, signal } from './abort-controller'; 

class App extends Component {
  componentDidMount() {
    console.log('controller', controller, signal);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Voting/>
      </div>
    );
  }
}

export default App;
