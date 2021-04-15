// Load simple assertion module
var assert = require("assert");

beforeEach(function() {
  console.log("beforeEach global");
});

describe("depth1", function() {
  beforeEach(function() {
    console.log("beforeEach depth1");
  });

  describe("depth2", function() {
    beforeEach(function() {
      console.log("beforeEach depth2");
    });

    it("should return number of characters in a string", function() {
      assert.strictEqual("Hello".length, 5);
    });
    it("should return first character of the string", function() {
      assert.strictEqual("Hello".charAt(0), "H");
    });

    afterEach(function() {
      console.log("afterEach depth2");
    });
  });

  afterEach(function() {
    console.log("afterEach depth1");
  });
});

afterEach(function() {
  console.log("afterEach global");
});
