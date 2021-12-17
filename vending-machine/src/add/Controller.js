import { ID } from '../storage/constants.js';
import Model from './Model.js';
import View from './View.js';
import Storage from '../storage/Storage.js';
import { checkProduct } from '../storage/validator.js';

export default class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.storage = new Storage();
    this.nameInput = document.querySelector(`#${ID.ADD_NAME_INPUT}`);
    this.priceInput = document.querySelector(`#${ID.ADD_PRICE_INPUT}`);
    this.quantityInput = document.querySelector(`#${ID.ADD_QUANTITY_INPUT}`);
    this.addBtn = document.querySelector(`#${ID.ADD_BTN}`);
    this.addProductInfo();
    this.getCurrentProduct();
  }
  // storage
  getCurrentProduct() {
    const current = this.storage.product;
    if (current.quantity == 0) {
      return;
    }

    this.model.addProduct(current.name, current.price, current.quantity);
    this.view.showList(this.model.productList);
  }

  // 하나씩 추가
  addProductInfo() {
    this.addBtn.addEventListener('click', e => {
      e.preventDefault();
      const name = this.nameInput.value;
      const price = this.priceInput.value;
      const quantity = this.quantityInput.value;
      if (!checkProduct(name, price, quantity, this.model.productList)) {
        return;
      }
      this.model.addProduct(name, price, quantity);
      this.view.showList(this.model.productList);
      this.updateStorage(name, price, quantity);
    });
  }

  updateStorage(name, price, quantity) {
    const product = {
      name: name,
      price: price,
      quantity: quantity,
    };
    this.storage.updateProduct(product);
    console.log(this.storage.product);
  }

  // 수량 업데이트 된 list 받기
  updateTable(productList) {
    if (!productList) {
      return;
    }

    this.model.addPurProduct(productList);
    this.view.showList(productList);
  }

  // 구매 표로 보내기
  setPurchaseTable() {
    if (!this.model.productList) {
      return;
    }

    return this.model.productList;
  }
}
