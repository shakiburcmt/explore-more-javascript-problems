const shop = [
    { name: 'shoe', price: 1500, quantity: 2 },
    { name: 'shirt', price: 2200, quantity: 3 },
    { name: 'panjabi', price: 3500, quantity: 4 },
    { name: 'borka', price: 4500, quantity: 1 },
];

function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const cost = products[i];
        totakProducts = cost.price * cost.quantity;
        sum = sum + totakProducts;

    }
    return sum;
}
const expense = totalCost(shop);
console.log("bil dekhe matha ghureche", expense);