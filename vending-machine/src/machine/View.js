import { ID, TABLE_ID } from '../storage/constants.js';
import { updateCoinTbody } from '../storage/presentFunc.js';

export default class View {
  constructor(coinList, coinAmount) {
    this.$tbody = document.querySelector(`#${TABLE_ID.COIN_TABLE}`);
    this.$amount = document.querySelector(`#${ID.MACHINE_CHARGE_AMOUNT}`);
    this.coinList = coinList;
    this.coinAmount = coinAmount;
  }

  showList(coinList) {
    updateCoinTbody(this.$tbody, [
      `${coinList[0]}개`,
      `${coinList[1]}개`,
      `${coinList[2]}개`,
      `${coinList[3]}개`,
    ]);
  }

  showAmount(coinAmount) {
    this.$amount.innerHTML = coinAmount;
  }
}
