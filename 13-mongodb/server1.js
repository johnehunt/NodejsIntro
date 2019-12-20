const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017";

// {useUnifiedTopology: true},  - ensures new server discovery and monitoring engine is used 
// original is deprecated but used by default

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
  if (err) throw err;
  console.log("Database created!");
  client.close();
});
