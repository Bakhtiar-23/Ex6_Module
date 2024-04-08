// index.js

import { setPriceList, getPrice } from './PriceList.js';

// Example usage
const pricelist = [
  {
    itemid: 1,
    itemname: 'bottle',
    prices: [{ qty: 1, price: 1.25 }, { qty: 100, price: 1.10 }, { qty: 1000, price: 1.00 }]
  },
  {
    itemid: 2,
    itemname: 'glass',
    prices: [{ qty: 1, price: 2.50 }, { qty: 50, price: 2.00 }, { qty: 200, price: 1.60 }]
  },
  // Add more items if needed
];

setPriceList(pricelist);

// Call getPrice operation with different products and quantities
console.log('Price for 150 glasses:', getPrice(2, 150)); // Expected output: 300
console.log('Price for 200 bottles:', getPrice(1, 200)); // Expected output: 200
