import AddController from './add/controller.js';
import MachineController from './machine/controller.js';
import InitPresent from './storage/initPresent.js';

export default class VendingMachine {
  constructor() {
    this.init = new InitPresent();
    this.addControll = new AddController();
    this.machineControll = new MachineController();
  }

  init() {
    return;
  }
}
const machine = new VendingMachine();
