import * as types from '../actions/actionTypes';

export default function taskReducer(state = [], action) { //TODO sett default state param
    switch(action.type) {
        case types.CREATE_TASK:
            //TODO speak to the backend
        case types.EDIT_TASK:
            //TODO ask it to create or edit task
        default:
            return state;
    }
}
