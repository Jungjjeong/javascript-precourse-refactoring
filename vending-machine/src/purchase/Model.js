class PurchaseCoin {
  constructor(coinAmount) {
    this.amount = Number(coinAmount);
  }
}

export default class Model {
  constructor() {
    this.purCoinAmount = 0;
    this.returnCoinList = [0, 0, 0, 0]; // 반환되는 코인 수
  }
  // 상품 가져오기
  addProduct(productList) {
    this.productList = productList;

    return this.productList;
  }

  // 투입 금액
  addPurCoin(coin) {
    const addCoin = new PurchaseCoin(coin);
    this.purCoinAmount += addCoin.amount;
  }

  // 상품 구매 혹은 반환으로 인해 코인 양 minus
  reducePurCoin(coin) {
    const reduceCoin = new PurchaseCoin(coin);
    this.purCoinAmount -= reduceCoin.amount;
  }

  updatePurCoin(coin) {
    const updateCoin = new PurchaseCoin(coin);
    this.purCoinAmount = updateCoin.amount;
  }
}
