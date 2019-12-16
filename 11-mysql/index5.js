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
    const sql = "DELETE FROM employees.employee WHERE id = 987";
    con.query(sql, function (err, results) {
        if (err) throw err;
        console.log(results.affectedRows, "record deleted");
      });
  });

  console.log('Done');