const express = require('express');
const db = require('sqlite3');
const taskBuilder = require('./taskBuilder');
const app = express();

app.get('/', function (req, res) {
    taskBuilder.init();
});

app.listen(8080, function() {
    console.log('Server listening on port 8080');
});
