import { ID, COIN_ARR } from '../storage/constants.js';
import Storage from '../storage/Storage.js';
import { checkCoin } from '../storage/validator.js';
import Model from './Model.js';
import View from './View.js';

export default class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.storage = new Storage();
    this.input = document.querySelector(`#${ID.MACHINE_CHARGE_INPUT}`);
    this.addBtn = document.querySelector(`#${ID.MACHINE_CHARGE_BTN}`);
    this.addCoin();
    this.getCurrentCoin();
  }

  getCurrentCoin() {
    const current = this.storage.vendingMachinCoin;
    if (current.coin == 0) {
      return;
    }

    this.model.addCoin(current.coin, [
      current.coin500,
      current.coin100,
      current.coin50,
      current.coin10,
    ]);

    this.view.showAmount(this.model.coinAmount);
    this.view.showList(this.model.coinList);
  }

  addCoin() {
    this.addBtn.addEventListener('click', e => {
      e.preventDefault();
      const coinAmount = this.input.value;
      if (!checkCoin(coinAmount)) {
        return;
      }
      const coinArr = this.addRandomCoin(coinAmount);

      this.model.addCoin(coinAmount, coinArr);

      this.view.showAmount(this.model.coinAmount);
      this.view.showList(this.model.coinList);
      this.updateStorage(this.model.coinAmount, this.model.coinList);
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

  updateStorage(coin, coinArr) {
    const machineCoin = {
      coin: coin,
      coin500: coinArr[0],
      coin100: coinArr[1],
      coin50: coinArr[2],
      coin10: coinArr[3],
    };

    this.storage.updateMachineCoin(machineCoin);
    console.log(this.storage.vendingMachinCoin);
  }

  updateTable(machine) {
    if (!machine) {
      return;
    }

    this.model.coinAmount = machine.coinAmount;
    this.model.coinList = machine.coinList;

    this.view.showAmount(this.model.coinAmount);
    this.view.showList(this.model.coinList);
    this.updateStorage(this.model.coinAmount, this.model.coinList);
  }

  setPurchaseTable() {
    if (!this.model.coinAmount || !this.model.coinList) {
      return;
    }

    return {
      coinAmount: this.model.coinAmount,
      coinList: this.model.coinList,
    };
  }
}
