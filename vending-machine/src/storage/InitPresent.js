import TabPresent from '../tab/present.js';
import AddPresent from '../add/present.js';
import MachinePresent from '../machine/present.js';
import PurchasePresent from '../purchase/present.js';
import { ID } from './constants.js';

export default class InitPresent {
  constructor() {
    this.$app = document.querySelector('#app');
    this.$addBtn = document.querySelector(`#${ID.TAB_MENU_ADD}`);
    this.$machineBtn = document.querySelector(`#${ID.TAB_MENU_MACHINE}`);
    this.$purchaseBtn = document.querySelector(`#${ID.TAB_MENU_PURCHASE}`);
    this.tab = new TabPresent();
    this.add = new AddPresent();
    this.machine = new MachinePresent();
    this.purchase = new PurchasePresent();
    this.setAddMenu();
    this.setMachineMenu();
    this.setPurchaseMenu();
  }

  setAddMenu() {
    this.tab.$addBtn.addEventListener('click', e => {
      e.preventDefault();

      this.setDivVisible([this.add, this.machine, this.purchase]);
    });
  }

  setMachineMenu() {
    this.tab.$machineBtn.addEventListener('click', e => {
      e.preventDefault();

      this.setDivVisible([this.machine, this.add, this.purchase]);
    });
  }

  setPurchaseMenu() {
    this.tab.$purchaseBtn.addEventListener('click', e => {
      e.preventDefault();

      this.setDivVisible([this.purchase, this.add, this.machine]);
    });
  }

  setDivVisible(divArr) {
    divArr[0].setVisible(true);
    divArr[1].setVisible(false);
    divArr[2].setVisible(false);

    this.$app.insertBefore(divArr[0].$div, this.$app.childNodes[1]);
  }
}
