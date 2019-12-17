const mongo = require("mongodb");
const client = mongo.MongoClient;
const url = "mongodb://localhost:27017";

client.connect(url, {useUnifiedTopology: true}, function(err, db) {
  if (err) throw err;
  const dbo = db.db("userdb");
  dbo.collection("users").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});
