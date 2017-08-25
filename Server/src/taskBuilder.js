var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');
var task = require('./data/task');

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

/* List all tasks in the database */
function listTasks() {
	db.run('SELECT * FROM tasks');
};

db.close();
