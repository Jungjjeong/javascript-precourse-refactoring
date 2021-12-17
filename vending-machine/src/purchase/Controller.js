import { ID, CLASS } from '../storage/constants.js';
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

  // 상품 더하기
  addPurProduct(productList) {
    this.purProductList = this.model.addProduct(productList);
    this.view.showProductList(this.purProductList);
    this.purBtn = document.querySelectorAll(`.${CLASS.PURCHASE_BTN}`);
    this.purchase();
  }

  // 투입한 금액 렌더링
  addPurCoin() {
    this.addBtn.addEventListener('click', e => {
      e.preventDefault();
      const purCoinAmount = this.input.value;

      this.model.addPurCoin(purCoinAmount);

      this.view.showAmount(this.model.purCoinAmount);
    });
  }

  // 구매하기 버튼 클릭
  purchase() {
    this.purBtn.forEach((btn, idx) => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        this.purchaseProduct(this.purProductList[idx], idx);
      });
    });
  }

  // 해당 상품 수량 -= 1
  purchaseProduct(product, idx) {
    //구매 가능 여부 체크
    product.quantity -= 1;

    this.purProductList[idx].quantity = product.quantity;
    this.addPurProduct(this.purProductList);
  }
}
