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
    const sql = "INSERT INTO employees.employee (id, name) VALUES (987, 'Jas Bowen')";
    con.query(sql, function (err, results) {
        if (err) throw err;
        console.log("Record inserted");
      });
  });

  console.log('Done');