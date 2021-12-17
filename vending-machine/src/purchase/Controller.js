import { ID, CLASS, COIN_ARR } from '../storage/constants.js';
import { checkAllowPurchase, checkAllowReturn, checkPurchaseCoin } from '../storage/validator.js';
import Storage from '../storage/Storage.js';
import Model from './Model.js';
import View from './View.js';

export default class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.storage = new Storage();
    this.machineCoinList = [0, 0, 0, 0];
    this.machineCoinAmount = 0;
    this.machine = 0;
    this.input = document.querySelector(`#${ID.PURCHASE_INPUT}`);
    this.addBtn = document.querySelector(`#${ID.PURCHASE_BTN}`);
    this.returnBtn = document.querySelector(`#${ID.PURCHASE_RETURN_BTN}`);
    this.addPurCoin();
    this.returnPurCoin();
    this.getCurrentCoin();
  }

  // 잔돈 보유 금액, 코인 배열 받아오기
  getMachineCoin(machine) {
    if (!machine) {
      return;
    }

    this.machineCoinAmount = machine.coinAmount;
    this.machineCoinList = machine.coinList;
  }

  getCurrentCoin() {
    const current = this.storage.purchaseCoin;
    if (current.purchaseCoin == 0) {
      return;
    }
    console.log(current.purchaseCoin);

    this.model.purCoinAmount = current.purchaseCoin;
    this.view.showAmount(this.model.purCoinAmount);
  }

  // 리스트 받아와 상품 더하기
  addTable(productList) {
    if (!productList) {
      return;
    }

    this.purProductList = this.model.addProduct(productList);
    this.view.showProductList(this.purProductList);
    this.purBtn = document.querySelectorAll(`.${CLASS.PURCHASE_BTN}`);
    this.purchase();
  }

  // 투입하기 버튼
  addPurCoin() {
    this.addBtn.addEventListener('click', e => {
      e.preventDefault();
      const purCoinAmount = this.input.value;
      if (!checkPurchaseCoin(purCoinAmount)) {
        return;
      }

      this.model.addPurCoin(purCoinAmount);

      this.view.showAmount(this.model.purCoinAmount);
    });
  }

  // 반환하기 버튼
  returnPurCoin() {
    this.returnBtn.addEventListener('click', e => {
      e.preventDefault();
      // 반환할 수 있는 금액과 동전 계산
      if (!checkAllowReturn(this.machineCoinAmount, this.model.purCoinAmount)) {
        return;
      }

      const returnCoin = this.returnCoin(this.model.purCoinAmount, this.machineCoinList);

      this.model.updatePurCoin(returnCoin.amount);
      this.setMachine(returnCoin.reduce, returnCoin.list);

      this.view.showAmount(this.model.purCoinAmount);
      this.view.showReturnCoinList(returnCoin.list);
      this.updateStorage(this.model.purCoinAmount);
    });
  }

  // 구매하기 버튼 클릭
  purchase() {
    this.purBtn.forEach((btn, idx) => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        this.purchaseProduct(this.purProductList[idx], idx);
        this.updateStorage(this.model.purCoinAmount);
      });
    });
  }

  // 해당 상품 수량 -= 1
  purchaseProduct(product, idx) {
    if (!checkAllowPurchase(product, this.model.purCoinAmount)) {
      return;
    }

    product.quantity -= 1;
    this.model.reducePurCoin(product.price);

    this.view.showAmount(this.model.purCoinAmount);

    this.purProductList[idx].quantity = product.quantity;
    this.addTable(this.purProductList);
  }

  // 상품관리 표로 보내기
  setAddTable() {
    if (!this.model.productList) {
      return;
    }

    return this.model.productList;
  }

  // 잔돈 보유금액 List에서 큰 금액부터 빼기
  returnCoin(coinAmount, machineCoinList) {
    let returnCoinList = [0, 0, 0, 0];
    const originCoin = coinAmount;

    machineCoinList.forEach((coin, idx) => {
      while (coin != 0 && coinAmount - COIN_ARR[idx] >= 0) {
        coinAmount -= COIN_ARR[idx];
        coin -= 1;
        returnCoinList[idx] += 1;
      }
    });

    return {
      list: returnCoinList,
      amount: coinAmount,
      reduce: originCoin - coinAmount,
    };
  }

  updateStorage(coin) {
    this.storage.updatePurchaseCoin(coin);
  }

  // 잔돈 충전에 다시 렌더링해줘야지
  setMachine(reduce, returnCoinList) {
    if (!reduce || !returnCoinList) {
      return;
    }
    const list = this.machineCoinList;
    list.forEach((coin, idx) => {
      coin -= returnCoinList[idx];
      this.machineCoinList[idx] = coin;
    });

    this.machineCoinAmount -= reduce;
    this.machine = { coinAmount: this.machineCoinAmount, coinList: this.machineCoinList };

    return this.machine;
  }

  setMachineTable() {
    if (!this.machine) {
      return;
    }

    return this.machine;
  }
}
