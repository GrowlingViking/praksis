import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import TasksPage from './components/TasksPage';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Taskmanager</h2>
        </div>
        <p className="App-intro">
          Tasks comming soon
        </p>
      </div>
    );
  }
}

export default App;
