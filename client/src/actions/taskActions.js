import axios from 'axios';
import * as types from './actionTypes';

export function createTask(task) {
    return { type: types.CREATE_TASK, name: task.name };
}

export function editTask(task) {
    console.log('Sending task:');
    console.log(task);
    return (dispatch) => {
        axios.post('http://localhost:3001/edit', {
            id: task.id,
            name: task.name,
            done: task.done
        }).then(updateList(dispatch))
        .catch(error => console.log(error));
    }
}

export function removeTask(task) {
    return { type: types.REMOVE_TASK, task };
}

export function updateListSuccess(tasks) {
    console.log(tasks);
    return { type: types.UPDATE_LIST_SUCCESS, tasks }
}

export function updateList(dispatch) {
    console.log('Sending get request to server')
    axios.get('http://localhost:3001/tasks').then(r => {
        dispatch(updateListSuccess(r.data))
    }).catch(error => console.log(error))
}
