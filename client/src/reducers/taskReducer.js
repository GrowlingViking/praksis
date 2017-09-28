import * as types from '../actions/actionTypes';

export default function taskReducer(state = [], action) {
    switch(action.type) {
        case types.UPDATE_LIST_SUCCESS:
            return action.tasks;
        default:
            return state;
    }
}
