const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with SUM 102.3, 45.8', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(102.3, 45.8);
    expect(spy.calledOnceWith('SUM', 102.3, 45.8)).to.be.true;
    spy.restore();
  });
});
