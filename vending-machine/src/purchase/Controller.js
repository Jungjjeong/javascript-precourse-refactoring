import { ID, COIN_ARR } from '../storage/constants.js';
import AddModel from '../add/Model.js';
import Model from './Model.js';
import View from './View.js';

export default class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.input = document.querySelector(`#${ID.PURCHASE_INPUT}`);
    this.addBtn = document.querySelector(`#${ID.PURCHASE_BTN}`);
    this.addPurCoin();
  }

  addPurProduct(productList) {
    this.purProductList = this.model.addProduct(productList);
    this.view.showProductList(this.purProductList);
  }

  addPurCoin() {
    this.addBtn.addEventListener('click', e => {
      e.preventDefault();
      const purCoinAmount = this.input.value;

      this.model.addPurCoin(purCoinAmount);

      this.view.showAmount(this.model.purCoinAmount);
    });
  }

  addRandomCoin(coinAmount) {
    let addCoin = coinAmount;
    let coinIndexArr = [0, 0, 0, 0];
    while (addCoin > 0) {
      let unit = MissionUtils.Random.pickNumberInList(COIN_ARR);
      if (unit <= addCoin) {
        let idx = COIN_ARR.indexOf(unit);
        addCoin -= unit;
        coinIndexArr[idx] += 1;
      }
    }

    return coinIndexArr;
  }
}
