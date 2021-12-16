import { PURCHASE, ID } from '../storage/constants.js';
import * as func from '../storage/presentFunc.js';

function initCoin($div) {
  const $coinTitle = func.createTitle('h3', PURCHASE.COIN_TITLE);
  const $coinBtn = func.createBtn(PURCHASE.COIN_BTN, ID.PURCHASE_RETURN_BTN);
  const $coinTable = func.createTable(
    [PURCHASE.COIN, PURCHASE.COIN_NUM],
    'return-coin-table',
  );
  func.createCoinTbody($coinTable, [
    [PURCHASE.COIN_500, ''],
    [PURCHASE.COIN_100, ''],
    [PURCHASE.COIN_50, ''],
    [PURCHASE.COIN_10, ''],
  ]);

  func.appendDiv($div, [$coinTitle, $coinBtn, $coinTable]);
}

function initItem($div) {
  const $itemTitle = func.createTitle('h3', PURCHASE.ITEM_TITLE);
  const $itemTable = func.createTable(
    [PURCHASE.NAME, PURCHASE.PRICE, PURCHASE.QUANTITY, PURCHASE.PURCHASE],
    'purchase-item-table',
  );

  func.appendDiv($div, [$itemTitle, $itemTable]);
}

function initPurchase($div) {
  const $purchaseTitle = func.createTitle('h3', PURCHASE.CHARGE_TITLE);
  const $purchaseInput = func.createInput(
    'number',
    PURCHASE.CHARGE_INPUT,
    ID.PURCHASE_INPUT,
  );
  const $purchaseBtn = func.createBtn(PURCHASE.CHARGE_BTN, ID.PURCHASE_BTN);
  const $purchaseAmount = func.createAmountText(
    PURCHASE.CHARGE_AMOUNT,
    ID.PURCHASE_AMOUNT,
  );

  func.appendDiv($div, [$purchaseTitle, $purchaseInput, $purchaseBtn, $purchaseAmount]);
}

function purchasePresent() {
  const $purchaseDiv = func.createDiv(ID.PURCHASE_DIV);
  initPurchase($purchaseDiv);
  initItem($purchaseDiv);
  initCoin($purchaseDiv);

  document.querySelector('#app').appendChild($purchaseDiv);
  return $purchaseDiv;
}

export default class PurchasePresent {
  constructor() {
    this.$div = purchasePresent();
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
