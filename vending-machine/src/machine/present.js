import { ID, MACHINE } from '../storage/constants.js';
import * as func from '../storage/presentFunc.js';

function initMachineTable($div) {
  const $coinTitle = func.createTitle('h3', MACHINE.MACHINE_TITLE);
  const $coinTable = func.createTable([MACHINE.COIN, MACHINE.COIN_NUM], 'coin-table');
  func.createCoinTbody($coinTable, [
    [MACHINE.COIN_500, ''],
    [MACHINE.COIN_100, ''],
    [MACHINE.COIN_50, ''],
    [MACHINE.COIN_10, ''],
  ]);

  func.appendDiv($div, [$coinTitle, $coinTable]);
}

function initMachineCharge($div) {
  const $chargeTitle = func.createTitle('h3', MACHINE.CHARGE_TITLE);
  const $chargeInput = func.createInput(
    'number',
    MACHINE.CHARGE_INPUT,
    ID.MACHINE_CHARGE_INPUT,
  );
  const $chargeBtn = func.createBtn(MACHINE.CHARGE_BTN, ID.MACHINE_CHARGE_BTN);
  const $chargeAmount = func.createAmountText(
    MACHINE.CHARGE_AMOUNT,
    ID.MACHINE_CHARGE_AMOUNT,
  );

  func.appendDiv($div, [$chargeTitle, $chargeInput, $chargeBtn, $chargeAmount]);
}

function machinePresent() {
  const $machineDiv = func.createDiv(ID.MACHINE_DIV);
  initMachineCharge($machineDiv);
  initMachineTable($machineDiv);

  document.querySelector('#app').appendChild($machineDiv);
  return $machineDiv;
}

export default class MachinePresent {
  constructor() {
    this.$div = machinePresent();
    this.setVisible(false);
  }

  setVisible(boo) {
    if (boo) {
      this.$div.style.visibility = 'visible';
      return true;
    }
    this.$div.style.visibility = 'hidden';
  }
}
