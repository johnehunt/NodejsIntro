const mysql = require("mysql");

console.log("Connecting to database");
const con = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "password",
  database: "employees"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// Insert into the database
const sql =
  "INSERT INTO employees.employee (id, name) VALUES (987, 'Jas Bowen')";
con.query(sql, function(err, results) {
  if (err) throw err;
  console.log("Record inserted");
});

// To end a database connection
con.end(err => {
  if (err) throw err;
  console.log("Database connection closed");
});

console.log("Done");
