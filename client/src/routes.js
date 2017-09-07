import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import TasksPage from './components/TasksPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={TasksPage} />
        //<Route path="tasks" component={TasksPage} />
    </Route>
);
