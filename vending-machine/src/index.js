import AddController from './add/controller.js';
import MachineController from './machine/controller.js';
import PurchaseController from './purchase/Controller.js';
import InitPresent from './storage/initPresent.js';

export default class VendingMachine {
  constructor() {
    this.init = new InitPresent();
    this.addControll = new AddController();
    this.machineControll = new MachineController();
    this.purchaseControll = new PurchaseController();
  }

  init() {
    return;
  }
}
const machine = new VendingMachine();
