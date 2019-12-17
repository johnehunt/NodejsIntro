const VError = require('verror');

function opps() {
    throw new VError('Its opps');
}

function doit() {
    try {
        opps();
    } catch (err) {
        console.log(err);
    }
}

doit();