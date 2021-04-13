const express = require("express");
const app = express();
const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;

const URL = "mongodb://localhost:27017";
const DATABASE_NAME = "userdb";
const COLLECTION_NAME = "users";
var collection;

console.debug("Starting Server");

app.listen(8080, () => {
  console.log("Server Running - http://localhost:8080");
  MongoClient.connect(
    URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function(err, client) {
      if (err) {
        console.err("Problem connecting to MongoDB");
        throw err;
      }
      const database = client.db(DATABASE_NAME);
      collection = database.collection(COLLECTION_NAME);
      console.log(
        "Connected to '" +
          DATABASE_NAME +
          "' using collection " +
          COLLECTION_NAME
      );
    }
  );
});

app.get("/", (req, res) => {
  console.debug("in default get/");
  res.writeHead(200, { "Content-Type": "text/html" });
  collection.find({}).toArray(function(err, result) {
    if (err) throw err;
    res.write("<h2>Users</h2>");
    res.write("<ul>");
    for (row of result) {
      res.write("<li>row: " + JSON.stringify(row) + "</li>");
    }
    res.write("</ul>");
    res.end();
  });
});
