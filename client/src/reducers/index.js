import {combineRedux} from 'redux';
import tasks from './taskReducer';

const rootReducer = combineReducers({
    tasks
});

export default rootReducer;
