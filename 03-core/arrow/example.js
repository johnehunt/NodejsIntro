// ES5
var obj = {
  id: 42,
  counter: function counter() {
    setTimeout(
      function() {
        console.log(this.id);
      },
      //      }.bind(this),
      1000
    );
  }
};

console.log(obj.id);
obj.counter();