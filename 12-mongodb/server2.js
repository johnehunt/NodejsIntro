const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017";

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
  if (err) throw err;
  const userdb = client.db("userdb");
  userdb.createCollection("users", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
  });

  client.close();
});
