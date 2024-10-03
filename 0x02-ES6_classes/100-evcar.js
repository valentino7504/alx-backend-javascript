/* eslint-disable class-methods-use-this */
import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  get range() {
    return this._range;
  }

  set range(rangeVal) {
    this._range = rangeVal;
  }

  cloneCar() {
    return new Car();
  }
}
