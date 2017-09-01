const db = require('sqlite');

module.exports = {

	createUser: function(id, username, password) {
		return db.run('INSERT INTO users (id, username, password) VALUES ($id, $username, $password)', {
			$id: id,
			$username: username,
			$password: password
		});
	},

	getUser: function(username cb) {
		db.get('SELECT * FROM users WHERE username = ?', username)
		.then(userValues => {
			var user = userValues;
			console.log(user);
			if (user == 'undefined') {
				return cb(null, null);
			}
			return cb(null, user);
		})
		.catch(err => console.error(err.stack));
	}

};
