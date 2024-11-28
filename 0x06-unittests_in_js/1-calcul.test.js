const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber with SUM', () => {
  const o = 'SUM';
  it('should round a correctly', () => {
    assert.equal(calculateNumber(o, 1.34, 8), 9);
  });
  it('should round b correctly', () => {
    assert.equal(calculateNumber(o, 3, 2.6), 6);
  });
  it('should round both', () => {
    assert.equal(calculateNumber(o, 3.456, 9.76542), 13);
  });
  it('should add whole numbers', () => {
    assert.equal(calculateNumber(o, 5, 9), 14);
  });
});

describe('calculateNumber with SUBTRACT', () => {
  const o = 'SUBTRACT';
  it('should round a and b', () => {
    assert.equal(calculateNumber(o, 5.3, 4.8), 0);
  });
  it('should give negative values', () => {
    assert.equal(calculateNumber(o, 4.96, 7.2), -2);
  });
  it('should work with zeros', () => {
    assert.equal(calculateNumber(o, 0, 8.2), -8);
  });
});

describe('calculateNumber with DIVIDE', () => {
  const o = 'DIVIDE';
  it('should divide negative numbers properly', () => {
    assert.equal(calculateNumber(o, -8.324, 2), -4);
  });
  it('should divide positive numbers', () => {
    assert.equal(calculateNumber(o, 9.543, 4.765), 2);
  });
  it('should give error for zero division', () => {
    assert.equal(calculateNumber(o, 28.323, 0), 'Error');
  });
});
