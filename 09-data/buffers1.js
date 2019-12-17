//create an uninitiated Buffer of 10 octets
let bufferOne = new Buffer.alloc(10);

//create a Buffer from a given array
let bufferTwo = new Buffer.from([10, 20, 30, 40, 50]);

//create a Buffer from a given string
let bufferThree = new Buffer.from('Simply Easy Learning');

console.log('bufferOne.length', bufferOne.length);
console.log('bufferTwo.length', bufferTwo.length);
console.log('bufferThree.length', bufferThree.length);

console.log(bufferOne.toJSON());
bufferOne.write("Buffer The Vampire Slayer!") 
console.log(bufferOne.toJSON());
console.log(bufferOne.toString());
