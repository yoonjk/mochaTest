const supertest = require('supertest');
const should = require('should');
const request = supertest.agent('http://localhost:3000');
const addContext = require('mochawesome/addContext');

// UNIT test begin
describe('SAMPLE unit test', () => {
  beforeEach(function () {
    addContext(this, 'Before some context')
  });
 
  afterEach(function () {
    addContext(this, {
      title: 'afterEach context',
      value: { a: 1 }
    });
  });
  // #1 should return home page

  it('should return home page', done => {
    addContext(this, ' return context')
    // calling home page api
    request
      .get('/')
      .expect('Content-type',/json/)
      .expect(200) // THis is HTTP response
      .end((err, res) => {
        // HTTP status should be 200
        res.status.should.equal(200);
        done();
      });
    });

  it('should add two number', done => {
    addContext(this, ' should context')
    request
      .post('/add')
      .send({num1 : 10, num2 : 20})
      .expect('Content-type',/json/)
      .expect(200)
      .end((err,res) => {
        res.status.should.equal(200);
        console.log('data:', res.body)
        done();
      })
  })

  it('hould return 404', done => {
    request
      .get('/random')
      .expect(404)
      .end((err, res) => {
        res.status.should.equal(404);
        done();
      })
  })
});
