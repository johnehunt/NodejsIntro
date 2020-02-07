// Load simple assertion module
var assert = require("assert");

// Define a test specification
describe("Basic Mocha String Test - Fixtures", function() {
  // runs once
  before(function() {
    console.log("before");
  });

  // runs before each test
  beforeEach(function() {
    console.log("beforerEach");
  });

  it("should return number of characters in a string", function() {
    assert.equal("Hello".length, 5);
  });
  it("should return first character of the string", function() {
    assert.equal("Hello".charAt(0), "H");
  });

  // runs after each test
  afterEach(function() {
    console.log("afterEach");
  });

  // Runs once
  after(function() {
    console.log("after");
  });
});
