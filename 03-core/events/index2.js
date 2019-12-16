const events = require("events");
const eventEmitter = new events.EventEmitter();

//Create an event handler / callback
var newUserEventHandler = function() {
  console.log("newUserEventHandler Handler Called");
};

//Assign the event handler to an event:
eventEmitter.on("newUserEvent", newUserEventHandler);

//Fire the 'scream' event:
eventEmitter.emit("newUserEvent");
