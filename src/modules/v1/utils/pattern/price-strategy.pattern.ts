function Event1(originPrice) {
  return originPrice * 0.6;
}

function Event2(originPrice) {
  return originPrice * 0.8;
}

const priceStrategies = {
  preOrder: Event1,
  blackFriday: Event2,
};

function getPrice(originPrice, typeEvent) {
  return priceStrategies[typeEvent](originPrice);
}
