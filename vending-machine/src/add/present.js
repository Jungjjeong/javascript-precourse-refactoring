import { ADD, ID } from '../storage/constants.js';
import * as func from '../storage/presentFunc.js';

function initAdd($div) {
  const $title = func.createTitle('h3', ADD.ADD_TITLE);
  const $nameInput = func.createInput('text', ADD.NAME, ID.ADD_NAME_INPUT);
  const $priceInput = func.createInput('number', ADD.PRICE, ID.ADD_PRICE_INPUT);
  const $quantityInput = func.createInput('number', ADD.QUANTITY, ID.ADD_QUANTITY_INPUT);
  const $btn = func.createBtn(ADD.ADD_BTN, ID.ADD_BTN);

  const $itemTitle = func.createTitle('h3', ADD.PRODUCT_TITLE);
  const $itemTable = func.createTable([ADD.NAME, ADD.PRICE, ADD.QUANTITY]);

  func.appendDiv($div, [
    $title,
    $nameInput,
    $priceInput,
    $quantityInput,
    $btn,
    $itemTitle,
    $itemTable,
  ]);
}

function addPresent() {
  const $addDiv = func.createDiv(ID.ADD_DIV);
  initAdd($addDiv);

  document.querySelector('#app').appendChild($addDiv);

  return $addDiv;
}

export default class AddPresent {
  constructor() {
    this.div = addPresent();
  }

  setVisible(boo) {
    if (boo) {
      this.div.style.visibility = 'visible';
      return true;
    }
    this.div.style.visibility = 'hidden';
  }
}
