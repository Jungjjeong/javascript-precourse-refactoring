import { CLASS, ID, TABLE_ID } from '../storage/constants.js';
import { createPurchaseTbody, updateCoinTbody } from '../storage/presentFunc.js';

export default class View {
  constructor(productList, returnCoinList, purchaseCoinAmount) {
    this.$productTbody = document.querySelector(`#${TABLE_ID.PURCHASE_TABLE}`);
    this.$coinTbody = document.querySelector(`#${TABLE_ID.RETURN_COIN_TABLE}`);
    this.$amount = document.querySelector(`#${ID.PURCHASE_AMOUNT}`);
    this.returnCoinList = returnCoinList;
    this.purchaseCoinAmount = purchaseCoinAmount;
    this.productList = productList;
  }

  showProductList(productList) {
    createPurchaseTbody(
      productList,
      [CLASS.PURCHASE_NAME, CLASS.PURCHASE_PRICE, CLASS.PURCHASE_QUANTITY],
      this.$productTbody,
    );
  }

  showReturnCoinList(coinList) {
    updateCoinTbody(this.$coinTbody, [
      coinList[0],
      coinList[1],
      coinList[2],
      coinList[3],
    ]);
  }

  showAmount(purchasecoinAmount) {
    this.$amount.innerHTML = purchasecoinAmount;
  }

  appendDataset(element, key, val) {
    element.setAttribute(key, val);
  }
}
