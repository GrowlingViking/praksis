import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';
import configureStore from './store/configureStore';
import { updateList } from './actions/taskActions';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
console.log('Opening store');
updateList(store.dispatch);

ReactDOM.render(
    <Provider store={store}>
        <Router exatct path="/" routes={routes}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
