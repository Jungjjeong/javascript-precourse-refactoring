import Coin from '../machine/Model.js';

class PurchaseCoin {
  constructor(coinAmount) {
    this.purCoinAmount = Number(coinAmount);
  }
}

export default class Model {
  constructor() {
    this.purchaseCoin = new PurchaseCoin();
    this.purCoinAmount = 0;
    this.returnCoinList = [0, 0, 0, 0]; // 반환되는 코인 수
  }
  // 상품 가져오기
  addProduct(productList) {
    this.productList = productList;

    return this.productList;
  }

  // 투입 금액
  addPurCoin(coinAmount) {
    this.coin = new PurchaseCoin(coinAmount);

    this.purCoinAmount += this.coin.purCoinAmount;
    console.log(this.purCoinAmount);
  }

  // 반환 코인 구하기
  addCoin(coinAmount, coinArr) {
    this.coin = new Coin(coinAmount, coinArr);
    this.returnCoinList.forEach((coin, idx) => {
      coin += this.coin.coinArr[idx];
      this.returnCoinList[idx] = coin;
    });

    this.purCoinAmount -= this.coin.coinAmount; // 반환된 금액 빼기
  }

  removeCoin(coinAmount, coinArr) {
    this.coinList.forEach((coin, idx) => {
      coin -= coinArr[idx];
      this.coinList[idx] = coin;
    });

    this.coinAmount -= coinAmount;
  }
}
