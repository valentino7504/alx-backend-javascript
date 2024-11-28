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

describe('Cart page', () => {
  const apiUrl = 'http://localhost:7865/cart';
  it('should return the right body and 200 status code', (done) => {
    request.get(`${apiUrl}/48`, (err, res, body) => {
      expect(body).to.equal('Payment methods for cart 48');
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it('should return a 404', (done) => {
    request.get(`${apiUrl}/valentino`, (err, res) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available payments page', () => {
  const apiUrl = 'http://localhost:7865/available_payments';
  it('should return payments obj', (done) => {
    const response = {
      payment_methods: {
        credit_cards: true,
        paypal: false,
      },
    };
    request.get(apiUrl, (err, res, body) => {
      expect(JSON.parse(body)).to.deep.equal(response);
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});

describe('Login page', () => {
  const apiUrl = 'http://localhost:7865/login';
  it('should return the login text', (done) => {
    request.post(apiUrl, { body: { userName: 'Valentino' }, json: true }, (err, res, body) => {
      expect(body).to.equal('Welcome Valentino');
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});
