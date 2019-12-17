// Load the mongoose module
const mongoose = require("mongoose");

// Set up default mongoose connection
const url = "mongodb://127.0.0.1/userdb";
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//Define a schema
var Schema = mongoose.Schema;

var UserModelSchema = new Schema({
  id: Number,
  name: String
});

// Compile model from schema
var UserModel = mongoose.model("UserModel", UserModelSchema);

var newUser = new UserModel({ id: 999, name: "James Lawson" });
newUser.save(err => {
  if (err) return handleError(err);
  else console.log("New User Saved");
});

// Also create and save in one go
UserModel.create({ id: 234, name: "Jos Jones" }, function(
  err,
  user
) {
  if (err) return handleError(err);
  else console.log("New User Saved: " + user);
});

UserModel.find({}, "id name", (err, users) => {
  if (err) return handleError(err);
  else console.log(users);
});

UserModel.find({ name: "Jos Jones" }, "id name", (err, users) => {
  if (err) return handleError(err);
  else console.log(users);
});

// Can do it step by step
var query = UserModel.find({})
  .select("name")
  .limit(5)
  .sort({ name: -1 });

query.exec((err, users) => {
  if (err) return handleError(err);
  else console.log(users);
});

// Can remove a user
UserModel.deleteOne({ id: 999 }, (err) => {
  if (err) return handleError(err);
  else console.log('User deleted')
});

// Can replace
UserModel.replaceOne({ id: 234 }, { name: "Jos Mahesan" }, (err, raw) => {
  if (err) return handleError(err);
  else console.log("User updated", raw);
});

UserModel.find({}, "id name", (err, users) => {
  if (err) return handleError(err);
  else console.log(users);
});
