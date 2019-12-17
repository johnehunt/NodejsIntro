const mongo = require("mongodb");
const client = mongo.MongoClient;
const url = "mongodb://localhost:27017";

client.connect(url, {useUnifiedTopology: true}, function(err, db) {
  if (err) throw err;
  var dbo = db.db("userdb");
  dbo.createCollection("users", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
