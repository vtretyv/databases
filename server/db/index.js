var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var connection = mysql.createConnection({
  // host: 'localhost',
  // port: '3000',
  // host: '127.0.0.1',
  database: 'chat', 
  user: 'student', //Check these creds
  password: 'student'//Check these creds
});

connection.connect(function (err) {
  if (err) {
    console.log('My Error', err);
    throw err;
  }
  console.log('connected');
});

exports.connectedNow = connection;

