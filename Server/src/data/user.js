const db = require('sqlite');

module.exports = {

	createUser: function(id, username, password) {
		return db.run('INSERT INTO users (id, username, password) VALUES ($id, $username, $password)', {
			$id: id,
			$username: username,
			$password: password
		});
	},

	getUser: function(username) {
		return db.get('SELECT * FROM users WHERE username = ?', username);
	}

};
