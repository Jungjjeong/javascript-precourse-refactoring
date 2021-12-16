import { TAB_MENU, ID } from '../storage/constants.js';
import * as func from '../storage/presentFunc.js';

function initTabMenu() {
  const tabMenuDiv = createDiv('tab-menu');

  tabMenuDiv.appendChild(func.createTitle('h1', TAB_MENU.TITLE));
  tabMenuDiv.appendChild(func.createBtn(TAB_MENU.ADD_BTN, ID.ADD_BTN));
  tabMenuDiv.appendChild(func.createBtn(TAB_MENU.MACHINE_BTN, ID.MACHINE_BTN));
  tabMenuDiv.appendChild(func.createBtn(TAB_MENU.PURCHASE_BTN, ID.PURCHASE_BTN));

  return tabMenuDiv;
}

export default function tab() {
  document.querySelector('#app').appendChild(initTabMenu());
}
