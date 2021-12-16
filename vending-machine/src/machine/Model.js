class Coin {
  constructor(coinAmount, coinArr) {
    this.coinAmount = Number(coinAmount);
    this.coinArr = coinArr;
  }
}

export default class Model {
  constructor() {
    this.coinAmount = 0;
    this.coinList = [0, 0, 0, 0];
  }

  addCoin(coinAmount, coinArr) {
    this.coin = new Coin(coinAmount, coinArr);
    this.coinList.forEach((coin, idx) => {
      coin += this.coin.coinArr[idx];
      this.coinList[idx] = coin;
    });

    this.coinAmount += this.coin.coinAmount;
  }

  removeCoin(coinAmount, coinArr) {
    this.coinList.forEach((coin, idx) => {
      coin -= coinArr[idx];
      this.coinList[idx] = coin;
    });

    this.coinAmount -= coinAmount;
  }
}
