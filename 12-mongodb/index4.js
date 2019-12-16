const mongo = require("mongodb");
const client = mongo.MongoClient;
const url = "mongodb://localhost:27017";

client.connect(url, function(err, db) {
  if (err) throw err;
  const dbo = db.db("userdb");
  const user = { id: 123, name: "John Smith" };
  dbo.collection("users").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});
