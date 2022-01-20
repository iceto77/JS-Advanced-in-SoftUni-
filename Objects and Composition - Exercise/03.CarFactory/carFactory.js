function solve(order){
    let outputCar = {};
    outputCar.model = order.model;
    let engine = {};
    if(order.power <= 90){
        engine.power = 90;
        engine.volume = 1800;
    } else if (order.power <= 120) {
        engine.power = 120;
        engine.volume = 2400;
    } else if (order.power <= 200) {
        engine.power = 200;
        engine.volume = 3500;
    }
    outputCar.engine = engine;

    let carriage = {};
    carriage.type = order.carriage;
    carriage.color = order.color;
    outputCar.carriage = carriage;
    if(order.wheelsize % 2 == 0){
        order.wheelsize--;
    }
    outputCar.wheels = [
        order.wheelsize, 
        order.wheelsize, 
        order.wheelsize, 
        order.wheelsize,];
    return outputCar;
}

console.log(solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }));