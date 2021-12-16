import InitPresent from './storage/initPresent.js';

export default class VendingMachine {
  constructor() {
    this.init = new InitPresent();
  }

  init() {
    return;
  }
}
const machine = new VendingMachine();
