import React, { Component } from 'react';
import logo from './elevator.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Elevator Control</h1>
	  <h2 className="App-info">Control your elevator</h2>
        </header>
	<div id="ElevatorButton"></div>
      </div>
    );
  }
}

    <div id="root"></div>
export default App;
