function* Add(x) {
    yield x + 1;
    yield x + 2;
    yield x + 3;
  }
  
  // Can loop thorugh the values
  
  gen = Add(5);
  for (let g of gen) {
    console.log(g);
  }