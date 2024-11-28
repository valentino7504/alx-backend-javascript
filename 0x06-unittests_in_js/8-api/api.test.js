const { expect } = require('chai');
const request = require('request');

describe('Index page', () => {
  const apiUrl = 'http://localhost:7865/';
  it('should respond with the right body', (done) => {
    request.get(apiUrl, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
  it('should respond with the right status code', (done) => {
    request.get(apiUrl, (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});
