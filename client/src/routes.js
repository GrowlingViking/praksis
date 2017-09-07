import React from 'react';
import { Route } from 'react-router-dom';

import App from './App';
import TasksPage from './components/TasksPage';

export default (
    <Route path="/" component={App}>
        <Route path="tasks" component={TasksPage} />
        //<Route path="tasks" component={TasksPage} />
    </Route>
);
