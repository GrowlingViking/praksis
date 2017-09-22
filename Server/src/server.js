const express = require('express');
const db = require('sqlite');
const promise = require('bluebird');
const task = require('./data/task');
const user = require('./data/user');
const cors = require('cors');
const app = express();
const passport = require('passport');
const Strategy = require('passport-local').Strategy;

var id = 1;

passport.use(new Strategy(
    function (username, password, cb) {
        user.getUser(username, function (err, user) {
            if (err) { return cb(err); }
            if (!user) { return cb(null, false); }
            if (user.password != password) { return cb(null, false); }
            return cb(null, user);
        });
}));

app.use(cors());

// Routes and stuff
app.get('/', function (req, res) {
    res.send('Connected with the server');
});

// Asks the database to list all task
app.get('/tasks', function (req, res) {
    task.listTasks().then(data => {
        res.status(200).json(data);
    })
    .catch(err => console.error(err.stack));
});

// Deletes a task from the database
app.delete('/', function (req, res) {
    task.removeTask(1).then(data => {
        res.status(200).json(data);
    })
    .catch(err => console.error(err.stack));
});

// Adds a task to the database
app.post('/add', function (req, res) {
    task.addTask(id, "new Task2").then(data => {
        res.status(200).json(data);
        id ++;
    })
    .catch(err => console.error(err.stack));
});

// Updates a task in the database
app.post('/edit', function (req, res) {
    task.editTask(2, "new Task3").then(data => {
        res.status(200).json(data);
    })
    .catch(err => console.error(err.stack));
});

/*  Test for getUser(), didn't show anything
app.get('/user', function (req, res) {
    res.status(200).json(user.getUser('USER'));
});
*/

// TODO Do this plz
app.post('/register', function (req, res) {

});

promise.resolve()
.then(() => db.open(':memory:', { promise }))
.then(() => db.migrate({ force: 'last' }))
.then(id = 0)
.catch(err => console.error(err.stack))
// Finally, launch Node.js app
.finally(() => app.listen(3001),
    console.log('Server app is listening on port 3001'));
