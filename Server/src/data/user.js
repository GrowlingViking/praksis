const db = require('sqlite');

module.exports = {

	createUser: function(id, username, password) {
		db.run('INSERT INTO users (id, username, password) VALUES ($id, $username, $password)', {
			$id: id,
			$username: username,
			$password: password
		})
		.catch(err => console.error(err.stack));
	},

	getUser: function(username, cb) {
		db.get('SELECT * FROM users WHERE username = ?', username)
		.then(userValues => {
			var user = userValues;
			console.log(user);
			// TODO Might not work
			if (user == 'undefined') {
				return cb(null, null);
			}
			return cb(null, user);
		})
		.catch(err => console.error(err.stack));
	}

};
