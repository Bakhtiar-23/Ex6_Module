// PriceList.js

let priceList = [];

function setPriceList(newPriceList) {
  priceList = newPriceList;
}

function getPrice(itemId, quantity) {
  const item = priceList.find(item => item.itemid === itemId);
  if (!item) {
    throw new Error(`Item with ID ${itemId} not found`);
  }
  const { prices } = item;
  let totalPrice = 0;
  for (const price of prices) {
    if (quantity >= price.qty) {
      totalPrice = quantity * price.price;
    }
  }
  return totalPrice;
}

module.exports = { setPriceList, getPrice };
