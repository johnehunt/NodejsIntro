const mongo = require("mongodb");
const client = mongo.MongoClient;
const url = "mongodb://localhost:27017";

client.connect(url, {useUnifiedTopology: true}, function(err, db) {
  if (err) throw err;
  const dbo = db.db("userdb");
  const query = { id: 123 };
  var mysort = { name: 1 };
  dbo
    .collection("users")
    .find(query)
    .sort(mysort)
    .toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
});
