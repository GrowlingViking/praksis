var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');
var task = require('./data/task');

/* Create the task table in the database */
function init() {
	db.run('CREATE TABLE tasks (id INTEGER, name TEXT, done INTEGER)')
};

/* Add a task to the database */
function add(task) {
	db.run('INSERT INTO tasks (id, name, done) VALUES (' + task.id + ', ' + task.name + ', ' + task.done + ')')
};

/* Delete a task from the database */
function remove(task) {
	db.run('DELETE FROM tasks WHERE id = ' + task.id);
};

/* Edit a task in the database */
function edit(task, newName) {
	db.run('UPDATE tasks SET name = ' + newName + ' WHERE id = ' + task.id);
};

db.close();
