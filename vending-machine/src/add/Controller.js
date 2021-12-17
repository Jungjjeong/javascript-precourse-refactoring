import { ID } from '../storage/constants.js';
import Model from './Model.js';
import View from './View.js';
import PurController from '../purchase/Controller.js';

export default class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.purControll = new PurController();
    this.nameInput = document.querySelector(`#${ID.ADD_NAME_INPUT}`);
    this.priceInput = document.querySelector(`#${ID.ADD_PRICE_INPUT}`);
    this.quantityInput = document.querySelector(`#${ID.ADD_QUANTITY_INPUT}`);
    this.addBtn = document.querySelector(`#${ID.ADD_BTN}`);
    this.addProduct();
  }

  addProduct() {
    this.addBtn.addEventListener('click', e => {
      e.preventDefault();
      const name = this.nameInput.value;
      const price = this.priceInput.value;
      const quantity = this.quantityInput.value;

      this.model.addProduct(name, price, quantity);
      console.log(this.model.productList);
      this.view.showList(this.model.productList);
      this.purControll.addPurProduct(this.model.productList);
    });
  }
}
