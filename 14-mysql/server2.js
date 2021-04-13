const mysql = require("mysql");

console.log("Connecting to database");
const con = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "password",
  database: "employees"
});

// Log the successful connection
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// Run a query
const sql = "SELECT * FROM employees.employee";
con.query(sql, function(err, results) {
  if (err) throw err;
  console.log("Results: " + results);
  for (employee of results) {
    console.log(employee);
  }
});

// To end a database connection
con.end(err => {
  if (err) throw err;
  console.log("Database connection closed");
});

console.log("Done");