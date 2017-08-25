var db = require('sqlite');
const promise = require('bluebird');

class Task {
	constructor(id, name) {
		this.id = id;
		this.name = name;
		this.done = 0;
	}
}

module.exports = {
	listTasks: function() {
		return db.all('SELECT * FROM tasks');
	},

	removeTask: function(id) {
		db.run('DELETE FROM tasks WHERE id = ' + id);
	}
};
