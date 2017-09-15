import * as types from '../actions/actionTypes';

export default function userReducer(state = "", action) {
    switch(action.type) {
        case types.LOGIN:
            //TODO try to login with the given user
        default:
            return state;
    }
}
