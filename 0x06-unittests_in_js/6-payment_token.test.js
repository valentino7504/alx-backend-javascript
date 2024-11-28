const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should be succesful', (done) => {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        expect(res).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch((err) => done(err));
  });
  it('should not be successful', (done) => {
    getPaymentTokenFromAPI(false)
      .then((res) => {
        expect(res).to.equal(undefined);
        done();
      })
      .catch((err) => done(err));
  });
});
