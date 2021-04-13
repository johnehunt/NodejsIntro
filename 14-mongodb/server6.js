const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, client) {
  if (err) throw err;
  const userdb = client.db("userdb");
  const query = { id: 123 };
  const mysort = { name: 1 };
  userdb
    .collection("users")
    .find(query)
    .sort(mysort)
    .toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
    });

  client.close();
});
