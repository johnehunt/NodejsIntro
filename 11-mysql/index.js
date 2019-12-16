var mysql = require('mysql');

console.log('Connecting to database');
var con = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "password",
    database: "employees"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  console.log('Done');