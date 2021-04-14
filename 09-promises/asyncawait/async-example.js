console.log("Define function with Promise");

function resolveAfter2Seconds() {
  console.log("Inside resolveAfter2Seconds");
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

console.log("Define asynchronous function");
async function asyncCall() {
  console.log("asyncCall calling resolveAfter2Seconds");
  const result = await resolveAfter2Seconds();
  console.log('asyncCall result: ', result);
}

console.log("Call asynchronous function");
asyncCall();
console.log("Done");
