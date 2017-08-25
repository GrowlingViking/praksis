var express = require('express');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');
var taskBuilder = require('./taskBuilder');
var app = express();

app.get('/', function (req, res) {
    res.send('Connected with the server');
    taskBuilder.init();
});

app.listen(8080, function() {
    console.log('Server listening on port 8080');
});
