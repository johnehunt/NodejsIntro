// Illustrates how the commander module
// can be used to manage command line arguments
const commander = require('commander');

commander
  .option('-d, --debug', 'output extra debugging')
  .option('-l, --long', 'provide long form information')
  .option('-p, --printer <message>', 'pretty print a message', 'hello');

commander.parse(process.argv);

if (commander.debug) console.log('debug mode turned on');
if (commander.long) console.log('This provides long form information');
if (commander.printer) console.log(`${commander.printer}`);