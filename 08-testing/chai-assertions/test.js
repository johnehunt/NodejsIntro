const should = require('chai').should();

describe('Object Test', function(){
  it('should have property name', function(){
    const car = {name:'Figo', Maker:'Ford'}
    car.should.have.property('name');
  });

  it('should have property name with value Figo', function(){
    const car = {name:'Figo', Maker:'Ford'}
    car.should.have.property('name').equal('Figo');
  });

  it('should compare objects', function(){
    const car = {name:'Figo', Maker:'Ford'}
    const car1 = {name:'Figo', Maker:'Ford'}
    // car.should.equal(car1);
    car.should.deep.equal(car1);
  });

  it('handling null', function(){
    const car = null;
    //car.should.not.exist;
    should.not.exist(car);
  });
});
