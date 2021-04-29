function * generatorForLoop(num) {
    for (let i = 0; i < num; i += 1) {
      yield console.log(i);
    }
  }
  
  const genForLoop = generatorForLoop(5);
  
  genForLoop.next(); // first console.log - 0
  genForLoop.next(); // 1
  genForLoop.next(); // 2
  genForLoop.next(); // 3
  genForLoop.next(); // 4