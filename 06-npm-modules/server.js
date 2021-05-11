// Illustrates how the commander module
// can be used to manage command line arguments
const commander = require('commander');

commander
  .version('0.0.1')
  .option('-d, --debug', 'output extra debugging')
  .option('-l, --long', 'provide long form information')
  .option('-p, --printer <message>', 'pretty print a message', 'hello');

commander.parse(process.argv);

const options = commander.opts();

if (options.debug) console.log('debug mode turned on');
if (options.long) console.log('This provides long form information');
if (options.printer) console.log(`printer ${options.printer}`);
