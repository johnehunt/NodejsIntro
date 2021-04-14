// Illustrates chanbing a sequence of then functions

const promise = new Promise(function(resolve, reject) {
    let x = 32;
    let y = 0;
    if (y != 0) {
      resolve(x / y);
    } else {
      reject("Division by Zero");
    }
  });

  promise
  .then((result) => {
    console.log("Did not divide by Zero");
    return result
  })
  .then((result) => {
    console.log(`Result is ${result}`);
    return result
  })
  .then((value) => {
      console.log('Finished processing result')
  })
  .catch((err) => {
      console.log('first error')
      throw err
  })
  .catch(function(errorMessage) {
    console.log(errorMessage);
  });