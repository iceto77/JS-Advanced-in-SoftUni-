class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    };

    loadingVegetables(vegetables) {
        let addedVegetables = [];
        for (let item of vegetables) {
            let [type, quantity, price] = item.split(' ');
            quantity = Number(quantity);
            price = Number(price);
            let targetItem = this.availableProducts.find(x => x.type == type);
            if (targetItem) {
                targetItem['quantity'] += quantity;
                if (price > targetItem['price']) {
                    targetItem['price'] = price;
                };
            } else {
                let newItem = {
                    type,
                    quantity,
                    price
                }
                this.availableProducts.push(newItem);
            };
            if (!addedVegetables.includes(type)) {
                addedVegetables.push(type);
            };
        }
        return `Successfully added ${addedVegetables.join(', ')}`;
    };

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        for (const itemOrder of selectedProducts) {
            let [type, quantity] = itemOrder.split(' ');
            quantity = Number(quantity);
            let targetItem = this.availableProducts.find(x => x.type == type);
            if(!targetItem){
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            };
            if(quantity > targetItem['quantity']){
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            };
            totalPrice += targetItem['price'] * quantity;
            targetItem['quantity']-= quantity;
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    };

    rottingVegetable(type, quantity) {
        let targetItem = this.availableProducts.find(x => x.type == type);
        if(!targetItem){
            throw new Error(`${type} is not available in the store.`);
        };
        if(quantity > targetItem['quantity']){ // trqbva da e >= tuk - logichno e da e taka
            targetItem['quantity'] = 0;
            return `The entire quantity of the ${type} has been removed.`;
        }else{
            targetItem['quantity']-= quantity;
            return `Some quantity of the ${type} has been removed.`;
        };
    };

    revision() {
        let result = [];
        result.push('Available vegetables:');
        this.availableProducts.sort((a,b) => a['price'] - b['price'] );
        for (const item of this.availableProducts) {
          result.push(`${item['type']}-${item['quantity']}-$${item['price']}`);  
        };
        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);
        return result.join('\n');
    };

}


// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.buyingVegetables(["Okra 1"]));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
// console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));


let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());

