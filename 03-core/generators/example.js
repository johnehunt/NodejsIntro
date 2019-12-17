function* Add(x) {
  yield x + 1;
  yield x + 2;
  yield x + 3;
}

var gen = Add(3);

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next()); // Value undefined & done is true

/*
Valid Generator syntax:

function * generator () {}
function* generator () {}
function *generator () {}

let generator = function * () {}
let generator = function* () {}
let generator = function *() {}
*/
