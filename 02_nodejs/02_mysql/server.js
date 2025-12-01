// MySQL
var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'myboard',
});

// Connect MySQL
conn.connect();

// Express.js
const express = require('express');
const app = express();

/*
  GET: /list
*/
app.get('/list', function (req, res) {
  console.log('Searching database ...');
  // MySQL Query
  conn.query('select * from post', function (err, rows, fields) {
    if (err) throw err;
    console.log(rows);
  });
});

// Node.js
app.listen(8080, function () {
  console.log('Listening ...');
});
