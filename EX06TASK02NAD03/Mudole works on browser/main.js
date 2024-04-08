import { setPriceList, getPrice } from './PriceList.js';

// Sample price list data
const priceListData = [
    { itemId: 1, itemname: 'bottle', prices: [{ qty: 1, price: 1.25 }, { qty: 100, price: 1.10 }, { qty: 1000, price: 1.00 }] },
    { itemId: 2, itemname: 'glass', prices: [{ qty: 1, price: 2.50 }, { qty: 50, price: 2.00 }, { qty: 200, price: 1.60 }] }
    // Add more items as needed
];

// Set the price list using the imported function
setPriceList(priceListData);

// Test the getPrice function
const totalPrice = getPrice(2, 150);
console.log('Total Price:', totalPrice); // Output should be 300.00
