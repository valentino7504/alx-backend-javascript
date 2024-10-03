export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(sizeVal) {
    if (typeof sizeVal !== 'number') {
      throw new TypeError('size must be a number');
    }
    this._size = sizeVal;
  }

  get location() {
    return this._location;
  }

  set location(newLocation) {
    if (typeof newLocation !== 'string') {
      throw new TypeError('location must be a string');
    }
    this._location = newLocation;
  }

  toString() {
    return this.location;
  }

  valueOf() {
    return this.size;
  }
}
