var assert = require('assert');
const request = require('supertest');
const app = require('../app')
describe("GET /", function(){
  it('responds with an html page', function(done){
    request(app)
      .get('/')
      .set('Accept', 'text/html')
      .expect('Content-Type', /html/ )
      .expect(200, done);
  });
});
