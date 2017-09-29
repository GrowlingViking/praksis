export default function taskReducer(state = [], action) {
    switch(action.type) {
        case 'UPDATE_LIST_SUCCESS':
            return action.tasks;
        default:
            return state;
    }
}
