function calculateNumber(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Value is not a number');
  }
  return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber;
