import React from 'react';
import { Route } from 'react-router-dom';

import App from './App';
import TasksPage from './components/TasksPage';
import LoginPage from './components/LoginPage';
import ManageTaskPage from './components/ManageTaskPage';

export default (
    <Route exact path="/" component={App}>
        <Route path="/tasks" component={TasksPage} />
        <Route path="/login" component={LoginPage} />
        <Route exact path="/task/:id" component={ManageTaskPage} />
        <Route path="/task/" component={ManageTaskPage} />
    </Route>
);
