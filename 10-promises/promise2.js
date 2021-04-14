const promise = new Promise(function(resolve, reject) {
  let x = 32;
  let y = 2;
  if (y != 0) {
    resolve(x / y);
  } else {
    reject("Division by Zero");
  }
});

// Illustrate better, more modern error handling
// with promises
promise
  .then(function(result) {
    console.log("Did not divide by Zero");
    console.log(result);
  })
  .catch(function(errorMessage) {
    console.log(errorMessage);
  });
