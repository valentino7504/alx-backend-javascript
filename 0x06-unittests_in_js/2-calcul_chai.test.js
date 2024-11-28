const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber with SUM', () => {
  const o = 'SUM';
  it('should round a correctly', () => {
    expect(calculateNumber(o, 1.34, 8)).to.equal(9);
  });
  it('should round b correctly', () => {
    expect(calculateNumber(o, 3, 2.6)).to.equal(6);
  });
  it('should round both', () => {
    expect(calculateNumber(o, 3.456, 9.76542)).to.equal(13);
  });
  it('should add whole numbers', () => {
    expect(calculateNumber(o, 5, 9)).to.equal(14);
  });
});

describe('calculateNumber with SUBTRACT', () => {
  const o = 'SUBTRACT';
  it('should round a and b', () => {
    expect(calculateNumber(o, 5.3, 4.8)).to.equal(0);
  });
  it('should give negative values', () => {
    expect(calculateNumber(o, 4.96, 7.2)).to.equal(-2);
  });
  it('should work with zeros', () => {
    expect(calculateNumber(o, 0, 8.2)).to.equal(-8);
  });
});

describe('calculateNumber with DIVIDE', () => {
  const o = 'DIVIDE';
  it('should divide negative numbers properly', () => {
    expect(calculateNumber(o, -8.324, 2)).to.equal(-4);
  });
  it('should divide positive numbers', () => {
    expect(calculateNumber(o, 9.543, 4.765)).to.equal(2);
  });
  it('should give error for zero division', () => {
    expect(calculateNumber(o, 28.323, 0)).to.equal('Error');
  });
});
