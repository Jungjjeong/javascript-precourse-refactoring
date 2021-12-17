import { CLASS, TABLE_ID } from '../storage/constants.js';
import { createProductTbody } from '../storage/presentFunc.js';

export default class View {
  constructor(productList) {
    this.tbody = document.querySelector(`#${TABLE_ID.ADD_TABLE}`);
    this.productList = productList;
  }

  showList(productList) {
    createProductTbody(
      productList,
      [CLASS.ADD_ITEM_NAME, CLASS.ADD_ITEM_PRICE, CLASS.ADD_ITEM_QUANTITY],
      this.tbody,
    );
  }
}
