// productAdd
function checkNameNull(name) {
  if (!name) {
    alert('상품 이름을 입력해주세요.');
    return;
  }

  return true;
}

function checkNameDuplicate(name, productList) {
  productList.forEach(product => {
    if (product.name == name) {
      alert('같은 이름의 상품이 등록되어 있습니다.');
      return;
    }
  });

  return true;
}

function checkPriceNull(price) {
  if (!price) {
    alert('상품 가격을 입력해주세요.');
    return;
  }

  return true;
}

function checkPriceDivide(price) {
  if (price < 100 || price % 10 != 0) {
    alert('100원보다 큰, 10으로 나누어 떨어지는 상품 가격을 입력해주세요.');
    return;
  }

  return true;
}

function checkQuantityNull(quatity) {
  if (!quatity) {
    alert('상품 가격을 입력해주세요.');
    return;
  }

  return true;
}

function checkQuantityNum(quantity) {
  if (quantity < 1) {
    alert('1개 이상의 수량을 입력해주세요.');
    return;
  }

  return true;
}

export function checkProduct(name, price, quantity, productList) {
  if (
    checkNameNull(name) &&
    checkNameDuplicate(name, productList) &&
    checkPriceNull(price) &&
    checkPriceDivide(price) &&
    checkQuantityNull(quantity) &&
    checkQuantityNum(quantity)
  ) {
    return true;
  }

  return false;
}

// machine
export function checkCoin(coin) {
  if (coin >= 10 && coin % 10 == 0) {
    return true;
  }
  alert('10원 이상의, 10원으로 나누어 떨어지는 충전 금액을 입력해주세요.');

  return false;
}

// purchase
export function checkPurchaseCoin(coin) {
  if (coin >= 10 && coin % 10 == 0) {
    return true;
  }
  alert('10원 이상의, 10원으로 나누어 떨어지는 충전 금액을 입력해주세요.');

  return false;
}

function checkPurQuantity(product) {
  if (product.quantity === 0) {
    alert('해당 상품의 구매할 수 있는 수량이 없습니다.');
    return;
  }

  return true;
}

function checkPurCoin(product, coin) {
  if (product.price > coin) {
    alert('해당 상품을 구매할 돈이 없습니다.');
    return;
  }

  return true;
}

export function checkAllowPurchase(product, coin) {
  if (checkPurQuantity(product) || checkPurchaseCoin(product, coin)) {
    return true;
  }

  return false;
}

// return
export function checkAllowReturn(machineCoin, purChaseCoin) {
  if (checkMachin(machineCoin) && checkCoinAmount(purChaseCoin)) {
    return true;
  }

  return false;
}

export function checkMachin(coin) {
  if (coin == 0) {
    alert('자판기에 반환할 잔돈이 없습니다.');
    return false;
  }

  return true;
}

function checkCoinAmount(coin) {
  if (coin == 0) {
    alert('반환 받을 금액이 없습니다.');
    return false;
  }

  return true;
}
