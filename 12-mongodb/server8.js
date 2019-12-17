const mongo = require("mongodb");
const client = mongo.MongoClient;
const url = "mongodb://localhost:27017";

client.connect(url, {useUnifiedTopology: true}, function(err, db) {
  if (err) throw err;
  const dbo = db.db("userdb");
  const query = { id: 123 };
  var newvalues = { $set: {name: "Gryff Cooke"} };
  dbo.collection("users").updateOne(query, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
