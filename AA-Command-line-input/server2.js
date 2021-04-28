// Provides more options than basic readline
const inquirer = require("inquirer");

var questions = [
  {
    type: "input",
    name: "name",
    message: "What's your name?"
  }
];

inquirer.prompt(questions).then(answers => {
  console.log(`Hi ${answers["name"]}!`);
});
