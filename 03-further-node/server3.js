// Print al the command line arguments
console.log("Command line arguments");
console.log(process.argv);

// Select the inputs to the program
const myArgs = process.argv.slice(2);
console.log("myArgs: ", myArgs);

// if first argument is port to run off
const port = parseInt(myArgs[0]);
console.log('Start server on port:', port);