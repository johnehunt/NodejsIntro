// Example illustrates updatign a document

const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const url = "mongodb://127.0.0.1:27017";

MongoClient.connect(
  url,
  { useUnifiedTopology: true, poolSize: 10 },
  function (err, client) {
    if (err) throw err;

    const userdb = client.db("userdb");
    const query = { id: 333 };
    const newvalues = { $set: { name: "Gryff Cooke" } };
    userdb
      .collection("users")
      .updateOne(query, newvalues)
      .then((res) => {
        console.log("1 document updated");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        client.close();
      });
  }
);
