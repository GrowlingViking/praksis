import * as types from './actionTypes';

export function login(user) {
    return { type: types.LOGIN, user };
}
