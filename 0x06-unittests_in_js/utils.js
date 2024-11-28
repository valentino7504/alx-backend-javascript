const Utils = {
  calculateNumber(type, a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new TypeError('Value is not a number');
    }
    switch (type) {
      case 'SUM':
        return Math.round(a) + Math.round(b);
      case 'SUBTRACT':
        return Math.round(a) - Math.round(b);
      case 'DIVIDE':
        if (b < 0.5 && b >= 0) return 'Error';
        return Math.round(a) / Math.round(b);
      default:
        throw new Error('Ensure operation type is SUM, SUBTRACT or DIVIDE');
    }
  },
};

module.exports = Utils;
