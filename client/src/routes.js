import React from 'react';
import { Route } from 'react-router-dom';

import TasksPage from './components/TasksPage';
import ManageTaskPage from './components/ManageTaskPage';

export default (
    <Route exact path="/" component={TasksPage}>
        <Route exact path="/task/:id" component={ManageTaskPage} />
    </Route>
);
