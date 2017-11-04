var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  host: 'http://127.0.0.1:3000',
  user: 'student', //Check these creds
  password: 'student'//Check these creds
});

connection.connect(function (err) {
  if (err) {
    console.log(err);
    throw err;
  }
  console.log('connected');
});

exports.connectedNow = connection;

