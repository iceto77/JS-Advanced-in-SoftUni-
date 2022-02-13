class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    };
    get menuCounter() {
        let count = 0;
        for (const key in this.menu) {
            count++;
        }
        return count;
    };

    loadProducts(products) {
        for (const item of products) {
            let record = '';
            let [productName, productQuantity, productTotalPrice] = item.split(' ');
            productTotalPrice = Number(productTotalPrice);
            if (productTotalPrice <= this.budgetMoney) {
                if (!this.stockProducts[productName]) {
                    this.stockProducts[productName] = 0;
                };
                this.stockProducts[productName] += Number(productQuantity);
                this.budgetMoney -= productTotalPrice;
                record = `Successfully loaded ${productQuantity} ${productName}`;
            } else {
                record = `There was not enough money to load ${productQuantity} ${productName}`;
            };
            this.history.push(record);
        }
        return this.history.join('\n');
    };

    addToMenu(meal, neededProducts, price) {
        if (!this.menu[meal]) {
            let currentProduct = {};
            for (const item of neededProducts) {
                let [productName, productQuantity] = item.split(' ');
                currentProduct[productName] = Number(productQuantity);
            }
            this.menu[meal] = { meal, currentProduct, price };
            if (this.menuCounter == 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            } else {
                return `Great idea! Now with the ${meal} we have ${this.menuCounter} meals in the menu, other ideas?`;
            };
        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        };
    };

    showTheMenu() {
        if (this.menuCounter == 0) {
            return 'Our menu is not ready yet, please come later...';
        };
        let result = [];
        for (const key in this.menu) {
            result.push(`${key} - $ ${this.menu[key].price}`);
        }
        return result.join('\n');
    };

    makeTheOrder(meal) {
        let currentMeal = this.menu[meal];
        if (!currentMeal) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        };
        let price = currentMeal.price;
        let products = currentMeal.currentProduct;
        for (const key in products) {
            console.log(this.stockProducts[key]);
            console.log(!this.stockProducts[key]);
            console.log(products[key]);
            if (!this.stockProducts[key] || products[key] > this.stockProducts[key]) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            };
        };
        for (const key in products) {
            this.stockProducts[key] -=products[key];
        };
        this.budgetMoney += price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${price}.`;
    };
}


let kitchen = new Restaurant(1000);
console.log(kitchen.showTheMenu());
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
//console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
//console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
//console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.loadProducts([]));
console.log(kitchen.menuCounter);
//console.log(kitchen.addToMenu('Sweet Dreams', ['Strawberries 10', 'Honey 1', 'Banana 1', 'Sugar 0.05'], 6.99));
console.log(kitchen.menuCounter);
console.log(kitchen.showTheMenu());
console.log(kitchen.addToMenu('Bob', ['Bob 10', 'Luk 1', 'Salt 0.05'], 3.99));
console.log(kitchen.makeTheOrder('Bob'));

//console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));


// //let kitchen = new Restaurant(1000);
// console.log(kitchen.showTheMenu());


// let kitchen = new Restaurant(1000);
// kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
// kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
// console.log(kitchen.makeTheOrder('frozenYogurt'));

