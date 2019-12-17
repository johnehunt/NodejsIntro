const mongo = require("mongodb");
const client = mongo.MongoClient;
const url = "mongodb://localhost:27017";

client.connect(url, {useUnifiedTopology: true}, function(err, db) {
  if (err) throw err;
  const dbo = db.db("userdb");
  const user = { id: 123, name: "John Smith" };
  dbo.collection("users").insertOne(user, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
