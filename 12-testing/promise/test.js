const chai = require("chai");
const expect = chai.expect;
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

describe("Testing a promise", function() {

  let promise = null;
  
  beforeEach(() => {
    promise = new Promise(function(resolve, reject) {
      let x = 32;
      let y = 2;
      if (y != 0) {
        resolve(x / y);
      } else {
        reject("Division by Zero");
      }
    });
  });

  // Old style with done and chai.expect
  it("resolves-with-done", function(done) {
    promise
      .then(result => {
        expect(result).to.equal(16);
      })
      .finally(done);
  });

  // More modern Mocha
  it("resolves", function () {
    return promise.then(result => {
      expect(result).to.equal(16);
    });
  });

  it("rejects", function () {
    return promise
      .then(res => {
        throw new Error("Was not supposed to succeed");
      })
      .catch(res => {
        expect(res).to.equal("Division by Zero");
      });
  });

  // Mocha with Chai-as-promised
  it("resolves-with-chai-as-promised",
    () => expect(promise).to.eventually.equal(16));

  it("rejects-with-chai-as-promised",
    () => {
      return expect(promise).to.eventually.equal("Division by Zero");
    });
});
