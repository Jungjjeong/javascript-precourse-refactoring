import { TAB_MENU, ID } from '../storage/constants.js';
import * as func from '../storage/presentFunc.js';

function initTabMenu($div) {
  const $title = func.createTitle('h1', TAB_MENU.TITLE);
  const $addBtn = func.createBtn(TAB_MENU.ADD_BTN, ID.ADD_BTN);
  const $machineBtn = func.createBtn(TAB_MENU.MACHINE_BTN, ID.MACHINE_BTN);
  const $purchaseBtn = func.createBtn(TAB_MENU.PURCHASE_BTN, ID.PURCHASE_BTN);

  func.appendDiv($div, [$title, $addBtn, $machineBtn, $purchaseBtn]);
}

export default function tabPresent() {
  const $tabMenuDiv = func.createDiv(ID.TAB_MENU_DIV);

  initTabMenu($tabMenuDiv);

  document.querySelector('#app').appendChild($tabMenuDiv);
}
