var express = require('express');
var db = require('sqlite');
const promise = require('bluebird');
var task = require('./data/task');
var app = express();

app.get('/', function (req, res) {
    res.send('Connected with the server');
});

app.post('/', function (req, res) {
    promise.resolve()
    .then(() => res.json(task.listTasks()))
    .catch(err => console.error(err.stack))
    .finally(() => console.log(task.listTasks()));
});

promise.resolve()
.then(() => db.open(':memory:', { Promise }))
.then(() => db.migrate({ force: 'last' }))
.catch(err => console.error(err.stack))
// Finally, launch Node.js app
.finally(() => app.listen(3000),
    console.log('Server app is listening on port 3000'));
