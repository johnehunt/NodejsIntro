const events = require("events");
const eventEmitter = new events.EventEmitter();

//Create an event handler / callback
function newUserEventHandler() {
  console.log("newUserEventHandler Handler Called");
};

//Assign the event handler callback to an event:
eventEmitter.on("newUserEvent", newUserEventHandler);

//Fire the NewUserEvent
eventEmitter.emit("newUserEvent");
