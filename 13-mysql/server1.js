const mysql = require("mysql");

console.log("Connecting to database");
const con = mysql.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "user",
  password: "user123",
  database: "employees"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// To end a database connection
con.end(err => {
  if (err) throw err;
  console.log("Database connection closed");
});

console.log("Done");
