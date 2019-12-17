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
    const sql = "SELECT * FROM employees.employee";
    con.query(sql, function (err, results) {
        if (err) throw err;
        console.log("Results: " + results);
        for (employee of results) {
            console.log(employee);
        }
      });
  });

  console.log('Done');