import axios from 'axios';
import * as types from '../actions/actionTypes';

export default function taskReducer(state = [], action) {
    switch(action.type) {
        case types.CREATE_TASK:
            axios.post('/tasks/create', {
                name: action.name
            })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            });
            break;
        case types.EDIT_TASK:
            axios.post('/tasks/edit', {
                id: action.task.id,
                name: action.task.name
            })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            });
            break;
        case types.REMOVE_TASK:
            axios.delete('/tasks', {
                id : action.task.id
            })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            });
            break;
        case types.UPDATE_LIST_SUCCESS:
            return action.tasks;
        default:
            return state;
    }
}
