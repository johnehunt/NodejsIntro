const events = require("events");
const eventEmitter = new events.EventEmitter();

//Create an event handler / callback
function newLogEventHandler(msg) {
  console.log("log message ", msg);
};

//Assign the event handler callback to an event:
eventEmitter.on("LogEvent", newLogEventHandler);

//Fire the NewUserEvent
eventEmitter.emit("LogEvent", "Hi There");

console.log("Done")