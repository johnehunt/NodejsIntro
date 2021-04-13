const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, client) {
  if (err) throw err;
  const userdb = client.db("userdb");
  const query = { id: 123 };
  userdb.collection("users").deleteOne(query, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
  });
  client.close();
});