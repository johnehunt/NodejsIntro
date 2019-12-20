const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, client) {
  if (err) throw err;
  const userdb = client.db("userdb");
  const query = { id: 123 };
  userdb.collection("users").findOne(query, function(err, result) {
    if (err) throw err;
    console.log(result.name);
  });

  client.close();
});
