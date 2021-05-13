// Example illustrates deling a document

const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const url = "mongodb://127.0.0.1:27017";

MongoClient.connect(
  url,
  { useUnifiedTopology: true, poolSize: 10 },
  function (err, client) {
    if (err) throw err;

    console.log('Deleting user with id 333');
    const userdb = client.db("userdb");
    const query = { id: 333 };
    userdb
      .collection("users")
      .deleteOne(query)
      .then((obj) => {
        console.log("1 document deleted");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => client.close());
  }
);
