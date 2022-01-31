const items = [
    { item: "biscuits", price: 30 },
    { item: "chia seed", price: 230 },
    { item: "protein shake", price: 400 },
    { item: "soya", price: 60 },
    { item: "eggs", price: 20 },
    { item: "condoms", price: 25 },
    { item: "apple", price: 70 },
    { item: "grapes", price: 80 }
];

const totalPrice = items.reduce((currentPrice, item) => {
    return currentPrice + item.price;
    // currentPrice was the amount which is going to be increased
    // item is the object that has been passed to the function which contains the price components
    // 0 is the starting or the initial value of the currentPrice value
    // the first parameter is the value whatever the previous iteration returned
    // the second item is the actual item in the array
    
}, 0);

console.log(totalPrice); 
