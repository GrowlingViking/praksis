import * as types from './actionTypes';

export function createTask(task) {
    return { type: types.CREATE_TASK, name: task.name };
}

export function editTask(task) {
    return { type: types.EDIT_TASK, task };
}

export function removeTask(task) {
    return { type: types.REMOVE_TASK, task };
}
