// ES6 - arrow function
var obj = {
  id: 42,
  counter: function counter() {
    setTimeout(() => {
      console.log(this.id);
    }, 1000);
  }
};

console.log(obj.id);
obj.counter();
