const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');
const task = require('./data/task');

/* Create the task table in the database */
function init() {
	db.run('CREATE TABLE tasks (id INTEGER, name TEXT, done INTEGER)')
};

/* Add a task to the database */
function add(task) {
	db.run('INSERT INTO tasks (id, name, done) VALUES (' + task.getId() + ', ' + task.getName() + ', ' + task.getDone() + ')')
};

/* Delete a task from the database */
function delete(task) {
	db.run('DELETE FROM tasks WHERE id = ' + task.getId())
};

/* Edit a task in the database */
function edit(task, newName) {
	db.run('UPDATE tasks SET name = ' + newName + ' WHERE id = ' + task.getId());
};
