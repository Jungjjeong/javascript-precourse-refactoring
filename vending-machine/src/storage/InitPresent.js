import tabPresent from '../tab/present.js';
import addPresent from '../add/present.js';
import machinePresent from '../machine/present.js';
import purchasePresent from '../purchase/present.js';
import { ID } from './constants.js';

export default class InitPresent {
  constructor() {
    this.addBtn = document.querySelector(ID.ADD_BTN);
    this.machineBtn = document.querySelector(ID.MACHINE_BTN);
    this.purchaseBtn = document.querySelector(ID.PURCHASE_BTN);
    this.tab = tabPresent();
    this.add = addPresent();
    this.machine = machinePresent();
    this.purchase = purchasePresent();
  }

  setAddMenu() {}
}
