import { TAB_MENU, ID } from '../storage/constants.js';
import * as func from '../storage/presentFunc.js';

function initTabMenu($div) {
  const $title = func.createTitle('h1', TAB_MENU.TITLE);
  const $addBtn = func.createBtn(TAB_MENU.ADD_BTN, ID.TAB_MENU_ADD);
  const $machineBtn = func.createBtn(TAB_MENU.MACHINE_BTN, ID.TAB_MENU_MACHINE);
  const $purchaseBtn = func.createBtn(TAB_MENU.PURCHASE_BTN, ID.TAB_MENU_PURCHASE);

  func.appendDiv($div, [$title, $addBtn, $machineBtn, $purchaseBtn]);
}

function tabPresent() {
  const $tabMenuDiv = func.createDiv(ID.TAB_MENU_DIV);

  initTabMenu($tabMenuDiv);

  document.querySelector('#app').appendChild($tabMenuDiv);

  return $tabMenuDiv;
}

export default class TabPresent {
  constructor() {
    this.div = tabPresent();
    this.addBtn = document.querySelector(`#${ID.TAB_MENU_ADD}`);
    this.machineBtn = document.querySelector(`#${ID.TAB_MENU_MACHINE}`);
    this.purchaseBtn = document.querySelector(`#${ID.TAB_MENU_PURCHASE}`);
  }

  setVisible(boo) {
    if (boo) {
      this.div.style.visibility = 'visible';
      return true;
    }
    this.div.style.visibility = 'hidden';
  }
}
