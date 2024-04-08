// main.js

import PriceList from './PriceList.js';

// Example price list
const examplePriceList = [
  {
    itemid: 1,
    itemname: 'Bottle',
    prices: [{ qty: 1, price: 1.25 },{ qty: 100, price: 1.10 },{ qty: 1000, price: 1.00 }]
  },
  {
    itemid: 2,
    itemname: 'Glass',
    prices: [{ qty: 1, price: 2.50 },{ qty: 50, price: 2.00 },{ qty: 200, price: 1.60 }]
  },
  // Add more items and prices as needed
];

// Set the example price list
PriceList.setPriceList(examplePriceList);

// Calculate total price for item ID 2 and quantity 150
const totalPrice = PriceList.getPrice(2, 150);

// Output the result to the console
console.log('Total Price:', totalPrice); // This will log "Total Price: 300.00"


