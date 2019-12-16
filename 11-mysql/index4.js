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
    const sql = "UPDATE employees.employee SET name = 'Jasmine Bowen' WHERE id = 987";
    con.query(sql, function (err, results) {
        if (err) throw err;
        console.log(results.affectedRows, "record updated");
      });
  });

  console.log('Done');