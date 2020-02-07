// Load simple assertion module
const assert = require("assert");

// Define a test specification
describe("Basic Mocha String Test", function() {
  it("should return number of characters in a string", function() {
    assert.equal("Hello".length, 5);
  });
  it("should return first character of the string", function() {
    assert.equal("Hello".charAt(0), "H");
  });
  it.skip('should return -1 unless present', function() {
    // this test will not be run
  });
});
