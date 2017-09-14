export function createTask(task) {
    return { type: 'CREATE', task };
}

export function editTask(task) {
    return { type: 'EDIT', task };
}
