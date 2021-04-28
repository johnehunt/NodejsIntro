
const VError = require('verror').VError;
const WError = require('verror').WError;

const errReqFail = new Error('Request failed');
const errReqStatus = new VError(errReqFail, 'Unexpected status code "%s"', '500');
const errReq = new WError(errReqStatus, 'Internal error');

console.error(errReq.message); //Internal error:

// get some real data for logging
console.info(errReq.toString()); //WError: Internal error; caused by VError: Unexpected status code "500": Request failed

