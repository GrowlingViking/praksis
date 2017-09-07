import React, { Component, PropTypes } from 'react';
import { Route } from 'react-router';
import { NavLink, Switch } from 'react-router-dom';
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
          {this.props.children}
        </div>
        <p className="App-intro">
          Tasks comming soon
        </p>
        <div>
          <NavLink exact to="/tasks">Tasks</NavLink>
        </div>
        <Switch>
          <Route exact path="/tasks" component={TasksPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
