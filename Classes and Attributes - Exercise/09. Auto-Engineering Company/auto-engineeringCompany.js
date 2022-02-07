function solve(input) {
    let cars = new Map();

    while (input.length > 0) {
        let [brand, model, quantity] = input.shift().split(' | ');
        quantity = Number(quantity);
        if (!cars.has(brand)) {
            cars.set(brand, new Map());
        };
        if (cars.get(brand).has(model)) {
            cars.get(brand).set(model, cars.get(brand).get(model) + quantity);
        } else {
            cars.get(brand).set(model, quantity);
        };    
    };
    for (let [brand, models] of cars.entries()) {
        console.log(brand);
 
        for (let [model, quantity] of models.entries()) {
            console.log(`###${model} -> ${quantity}`);
        }
    }
};

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);
