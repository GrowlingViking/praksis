var express = require('express');
var db = require('sqlite');
const Promise = require('bluebird');
var taskBuilder = require('./taskBuilder');
var app = express();

app.get('/', function (req, res) {
    res.send('Connected with the server');
});

app.listen(8080, function() {
    console.log('Server listening on port 8080');
});

Promise.resolve()
.then(() => db.open('./database.sqlite', { Promise }))
.then(() => db.migrate({ force: 'last' }))
.catch(err => console.error(err.stack))
// Finally, launch Node.js app
.finally(() => app.listen(3000));
