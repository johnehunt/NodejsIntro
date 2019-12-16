const mongo = require("mongodb");
const client = mongo.MongoClient;
const url = "mongodb://localhost:27017";

client.connect(url, function(err, db) {
  if (err) throw err;
  const dbo = db.db("userdb");
  const query = { id: 123 };
  dbo.collection("users").deleteOne(query, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});
