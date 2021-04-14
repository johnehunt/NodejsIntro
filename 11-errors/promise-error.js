function getData() {
  return Promise.reject("Oh No");
}

function printIt(res) {
  console.log(res);
}

// Handles rejection that is not caught
process.on('unhandledRejection', function (reason, promise) {
  console.error('Unhandled rejection', {reason: reason, promise: promise})
});

getData()
  .then(printIt)
  .catch(e => {
    console.error("error");
    console.error(e);
  });

  console.log("---------");

  getData()
  .then(printIt);

