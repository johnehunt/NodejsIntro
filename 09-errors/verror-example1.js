const VError = require('verror');

const err = new VError('missing file: "%s"', 'input.txt');
console.log(err.message);
