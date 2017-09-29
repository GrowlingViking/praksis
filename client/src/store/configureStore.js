import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import taskReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
    return createStore(
        taskReducer,
        initialState,
        applyMiddleware(thunk, reduxImmutableStateInvariant())
    );
}
