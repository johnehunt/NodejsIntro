const should = require('chai').should();

describe('Object Test', function(){
  it('should have property name', function(){
    const car = {name:'Fiesta', Maker:'Ford'}
    car.should.have.property('name');
  });

  it('should have property name with value Fiesta', function(){
    const car = {name:'Fiesta', Maker:'Ford'}
    car.should.have.property('name').equal('Fiesta');
  });

  it('should compare objects', function(){
    const car = {name:'Fiesta', Maker:'Ford'}
    const car1 = {name:'Fiesta', Maker:'Ford'}
    // car.should.equal(car1);
    car.should.deep.equal(car1);
  });

  it('handling null', function(){
    const car = null;
    //car.should.not.exist;
    should.not.exist(car);
  });
});
