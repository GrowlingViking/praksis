const express = require('express');
const db = require('sqlite');
const promise = require('bluebird');
const task = require('./data/task');
const user = require('./data/user');
const app = express();
const passport = require('passport');
const Strategy = require('passport-local').Strategy;

passport.use(new Strategy(
    function (username, password, cb) {
        user.getUser(username, function (err, user) {
            if (err) { return cb(err); }
            if (!user) { return cb(null, false); }
            if (user.password != password) { return cb(null, false); }
            return cb(null, user);
        });
}));

// Routes and stuff
app.get('/', function (req, res) {
    res.send('Connected with the server');
});

// Asks the database to list all task
app.get('/list', function (req, res) {
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
    task.addTask(1, "new Task2").then(data => {
        res.status(200).json(data);
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

app.get('/user', function (req, res) {
    res.status(200).json(user.getUser('USER'));
});

promise.resolve()
.then(() => db.open(':memory:', { promise }))
.then(() => db.migrate({ force: 'last' }))
.catch(err => console.error(err.stack))
// Finally, launch Node.js app
.finally(() => app.listen(3000),
    console.log('Server app is listening on port 3000'));
