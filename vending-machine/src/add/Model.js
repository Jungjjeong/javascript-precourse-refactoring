class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

export default class Model {
  constructor() {
    this.productList = [];
  }

  addProduct(name, price, quantity) {
    this.product = new Product(name, price, quantity);
    this.productList.push(this.product);
  }

  removeItem(productIdx) {
    this.productList.splice(productIdx, 1);
  }
}
