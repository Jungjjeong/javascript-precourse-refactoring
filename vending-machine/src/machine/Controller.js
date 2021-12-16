import { ID, COIN_ARR } from '../storage/constants.js';
import Model from './Model.js';
import View from './View.js';

export default class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.input = document.querySelector(`#${ID.MACHINE_CHARGE_INPUT}`);
    this.addBtn = document.querySelector(`#${ID.MACHINE_CHARGE_BTN}`);
    this.addCoin();
  }

  addCoin() {
    this.addBtn.addEventListener('click', e => {
      e.preventDefault();
      const coinAmount = this.input.value;
      const coinArr = this.addRandomCoin(coinAmount);

      this.model.addCoin(coinAmount, coinArr);

      this.view.showAmount(this.model.coinAmount);
      this.view.showList(this.model.coinList);
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
