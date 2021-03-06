const db = require('sqlite');

module.exports = {

	listTasks: function() {
		return db.all('SELECT * FROM tasks');
	},

	removeTask: function(id) {
		return db.run('DELETE FROM tasks WHERE id = ?', id);
	},

	addTask: function(id, name) {
		return db.run('INSERT INTO tasks (id, name, done) VALUES ($id, $name, 0)', {
			$id: id,
			$name: name
		});
	},

	editTask: function(id, newName, done) {
		return db.run('UPDATE tasks SET name = $newName, done = $done WHERE id = $id', {
			$id: id,
			$newName: newName,
            $done: done
		});
	}
};
