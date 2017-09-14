import * as types from './actionTypes';

export function createTask(task) {
    return { type: types.CREATE_TASK, task };
}

export function editTask(task) {
    return { type: types.EDIT_TASK, task };
}
