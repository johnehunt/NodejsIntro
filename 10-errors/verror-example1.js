const VError = require('verror');

var err = new VError('missing file: "%s"', '/etc/passwd');
console.log(err.message);
