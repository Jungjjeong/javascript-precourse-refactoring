import { appendDiv, createProductTbody } from '../storage/presentFunc.js';

export default class View {
  constructor(productList) {
    this.tbody = document.querySelector('#item-table');
    this.productList = productList;
  }

  showList(productList) {
    createProductTbody(productList, this.tbody);
  }
}
