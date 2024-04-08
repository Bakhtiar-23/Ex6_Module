let _priceList;

export const setPriceList = (priceList) => {
    _priceList = priceList;
};

export const getPrice = (itemId, quantity) => {
    // Logic to calculate total price based on itemId and quantity
    // Replace the logic with your actual implementation
    return 300;  // Placeholder value, replace with actual calculation
};

export const priceList = {
    setPriceList,
    getPrice
};
