const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let spy;
  beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });
  afterEach(() => {
    spy.restore();
  });
  it('should call console.log with 120', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnceWith('The total is: 120')).to.be.true;
  });
  it('should call console.log with 20', () => {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledOnceWith('The total is: 20')).to.be.true;
  });
});
