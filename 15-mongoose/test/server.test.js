const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server/server");
const should = chai.should();

chai.use(chaiHttp);

const PATH = "/api/users";

describe('Testing user REST API', function() {
  it('should list ALL users on /api/users GET', function(done) {
    chai
      .request(server)
      .get(PATH)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a("array");
        done();
      });
  });
  it("should list a SINGLE user on /users/<id> GET", function(done) {
    chai
      .request(server)
      .get(PATH + "/321")
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a("array");
        done();
      });
  });
  it("should add a SINGLE user on /users POST", function(done) {
    chai
      .request(server)
      .post(PATH)
      .send({ id: "321", name: "Phoebe Davies" })
      .end(function(err, res) {
        res.should.have.status(201);
        done();
      });
  });
  it("should update a SINGLE user on /users PUT", function(done) {
    chai
      .request(server)
      .put(PATH)
      .send({ id: "321", name: "Phoebe Davies" })
      .end(function(err, res) {
        res.should.have.status(201);
        done();
      });
  });
  it("should delete a SINGLE user on /users/<id> DELETE", function(done) {
    chai
      .request(server)
      .delete(PATH + "/1")
      .end(function(err, res) {
        res.should.have.status(204);
        done();
      });
  });
});
