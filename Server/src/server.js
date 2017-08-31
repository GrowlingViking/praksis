const express = require('express');
const db = require('sqlite');
const promise = require('bluebird');
const task = require('./data/task');
const app = express();

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
    .catch(err => consle.error(err.stack));
});

promise.resolve()
.then(() => db.open(':memory:', { promise }))
.then(() => db.migrate({ force: 'last' }))
.catch(err => console.error(err.stack))
// Finally, launch Node.js app
.finally(() => app.listen(3000),
    console.log('Server app is listening on port 3000'));
