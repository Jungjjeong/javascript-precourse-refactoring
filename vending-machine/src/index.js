import Controller from './add/controller.js';
import InitPresent from './storage/initPresent.js';

export default class VendingMachine {
  constructor() {
    this.init = new InitPresent();
    this.controll = new Controller();
  }

  init() {
    return;
  }
}
const machine = new VendingMachine();
