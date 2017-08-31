var db = require('sqlite');
const promise = require('bluebird');

module.exports = {
	listTasks: function() {
		return db.all('SELECT * FROM tasks');
	},

	removeTask: function(id) {
		return db.run('DELETE FROM tasks WHERE id = ?', [id]);
	}
};
