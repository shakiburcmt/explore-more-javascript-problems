const shop = [
    { name: 'shoe', price: 1500 },
    { name: 'shirt', price: 2200 },
    { name: 'panjabi', price: 3500 },
    { name: 'borka', price: 4500 },
];

function totalCost(taka) {
    let sum = 0;
    for (let i = 0; i < taka.length; i++) {
        const payment = taka[i];
        sum = sum + payment.price;
    }
    return sum;
}

const expense = totalCost(shop);
console.log(expense);