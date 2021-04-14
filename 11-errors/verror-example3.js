const VError = require('verror');

// VError can chain errors
// Allows original error to be linked to app specific error

const fs = require('fs');
const filename = '/nonexistent';

fs.stat(filename, function (err1) {
    var err2 = new VError(err1, 'stat "%s"', filename);
    console.error(err2.message);
});