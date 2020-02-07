// Example illustrating environment variables

// Set up the dotenv object
// will look for files with ./env extension
const dotenv = require("dotenv");
const env_success = dotenv.config();

if (env_success.error) {
  throw env_success.error;
}
console.log(env_success.parsed);

// Can now access data via process.env object
console.log("Environment variable");
console.log(process.env.PORT);
console.log(process.env.TITLE);
