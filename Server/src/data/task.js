var db = require('sqlite');
const promise = require('bluebird');

class Task {
	constructor(id, name) {
		this.id = id;
		this.name = name;
		this.done = 0;
	}
}

/* List all tasks in the database
function listTasks() {
	return db.all('SELECT * FROM tasks');
};
*/

module.exports = {
	listTasks: function() {
		return db.all('SELECT * FROM tasks');
	}
};
