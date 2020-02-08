// Create an uninitialized Buffer of 10 octets
const bufferOne = Buffer.alloc(10);

// Create a Buffer from a given array
const bufferTwo = Buffer.from([10, 20, 30, 40, 50]);

// Create a Buffer from a given string
const bufferThree = Buffer.from("Simply Easy Learning");

console.log("bufferOne.length:", bufferOne.length);
console.log("bufferTwo.length:", bufferTwo.length);
console.log("bufferThree.length:", bufferThree.length);

console.log("before bufferOne.toJSON():", bufferOne.toJSON());
bufferOne.write("Buffer The Vampire Slayer!", 'utf8');
console.log("after bufferOne.toJSON():", bufferOne.toJSON());

console.log("bufferOne.toString():", bufferOne.toString());

// Can iterate through contents of buffer
for (const b of bufferThree) {
  console.log(b.toString());
}
