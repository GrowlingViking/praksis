import axios from 'axios';
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

export function updateListSuccess(tasks) {
    return { type: types.UPDATE_LIST_SUCCESS, tasks }
}

export function updateList(dispatch) {
    console.log('Sending get request to server')
    axios.get('http://localhost:3001/tasks').then(r => {
        dispatch(updateListSuccess(r.data))
    }).catch(error => console.log(error))
}
