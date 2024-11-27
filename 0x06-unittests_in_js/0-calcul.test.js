const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should round up a', () => {
    assert.equal(calculateNumber(2.35, 4), 6);
    assert.equal(calculateNumber(6.8, 19), 26);
    assert.equal(calculateNumber(-2.1, 2), 0);
  });
  it('should round up b', () => {
    assert.equal(calculateNumber(1, 2.2222222), 3);
    assert.equal(calculateNumber(2.9, 8), 11);
    assert.equal(calculateNumber(-6.8, 6), -1);
  });
  it('should correctly add up a and b', () => {
    assert.equal(calculateNumber(15.96, 2.21), 18);
    assert.equal(calculateNumber(1.8, 0.1), 2);
    assert.equal(calculateNumber(8.7, 5.9), 15);
  });
  it('should throw type error if wrong type', () => {
    assert.throws(() => calculateNumber('hello', 4), { name: 'TypeError' });
  });
});
