console.log('Define function callback')
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

// Define a asynconous function
// that will asynchronously wait for 
// the resolveAfter2Seconds to complete
async function asyncCall() {
  console.log("calling");
  var result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall();
