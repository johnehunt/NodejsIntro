// Load chai
const chai = require("chai");
const expect = chai.expect;

// import sinon
const sinon = require("sinon");

// avoid hard coding the path
const path = require('path')

// import the getIndexPage function
const getIndexPage = require(path.resolve(__dirname, "app.js"));

describe("testing the getIndexPage function", function () {
    it("should return the index page content", function () {
        // Set up a user object with an empty isLoggedIn function
        let user = {
            isLoggedIn: function () { }
        }

        // Stub isLoggedIn function and make it return true always
        const isLoggedInStub = sinon.stub(user, "isLoggedIn").returns(true);

        // pass user into the req object
        let req = {
            user: user
        }

        // Have the resonse object (res) have a two functions write and end
        // because we use res.write() and res.end()in our func
        let res = {
            write: sinon.spy(),
            end: function () { }
        }

        // Call the function for us to test
        getIndexPage(req, res);

        // assert that the stub isLoggedInStub is called at least once
        expect(isLoggedInStub.calledOnce).to.be.true;

        // check that `res.send` is called once
        expect(res.write.calledOnce).to.be.true;

        // check that the correct information was supplied
        const result = "<h1>Hello</h1><p>Wlecome</p>";
        expect(res.write.firstCall.args[0]).to.equal(result);
    });
});