const events = require("events");
const eventEmitter = new events.EventEmitter();
const LOG_EVENT = "LogEvent"

//Create an event handler / callback
function newLogEventHandler(msg) {
  console.log("log message ", msg);
};

//Assign the event handler callback to an event:
eventEmitter.on(LOG_EVENT, newLogEventHandler);

//Fire the NewUserEvent
eventEmitter.emit(LOG_EVENT, "Hi There");

console.log("Done")