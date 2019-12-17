const mongo = require("mongodb");
const client = mongo.MongoClient;
const url = "mongodb://localhost:27017";

// {useUnifiedTopology: true},  - ensures new server discovery and monitoring engine is used 
// original is deprecated but used by default

client.connect(url, {useUnifiedTopology: true}, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
