// Default test location for Mocha
// Can override this in package.json
// e.g. "test": "mocha 08-testing/test/**/*.js"

var assert = require('assert');
var should = require('chai').should();

describe('Object Test', function(){
  it('should have property name', function(){
    var car = {name:'Fiesta', Maker:'Ford'}

    car.should.have.property('name');
  });

  it('should have property name with value Fiesta', function(){
    var car = {name:'Fiesta', Maker:'Ford'}
    car.should.have.property('name').equal('Fiesta');
  });

  it('should compare objects', function(){
    var car = {name:'Fiesta', Maker:'Ford'}
    var car1 = {name:'Fiesta', Maker:'Ford'}

    // car.should.equal(car1); // uses strict equality ===
    car.should.deep.equal(car1); // provides value based comparison
  });

  it('handling null', function(){
    var car = null;
    //car.should.not.exist;
    should.not.exist(car);
  });
});
