import React, { Component } from 'react';
import { Route } from 'react-router';
import { NavLink, Switch } from 'react-router-dom';
import TasksPage from './components/TasksPage';
import ManageTaskPage from './components/ManageTaskPage';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Taskmanager</h2>
          {this.props.children}
        </div>
        <div>
          <NavLink to="/">Home</NavLink>
          {' | '}
          <NavLink to="/tasks">Tasks</NavLink>
        </div>

        <Switch>
            <Route path="/tasks" component={TasksPage} />
            <Route path="/task/:id" component={ManageTaskPage} />
            <Route path="/" component={App.js} />
        </Switch>
      </div>
    );
  }
}

export default App;
