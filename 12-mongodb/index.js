const mongo = require('mongodb');
const client = mongo.MongoClient;
const url = "mongodb://localhost:27017/mydb";

client.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
