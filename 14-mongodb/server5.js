const mongo = require("mongodb");
const client = mongo.MongoClient;
const url = "mongodb://localhost:27017";

client.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  const userdb = db.db("userdb");
  const query = { id: 123 };
  userdb
    .collection("users")
    .find(query)
    .toArray(function(err, results) {
      if (err) throw err;
      console.log(results);
    });

  db.close();
});
