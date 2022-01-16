function solve(input){
    input.sort((a, b) => a - b);
    let midle = Math.floor(input.length / 2);
    input.splice(0, midle);
    return input;
}


console.log(solve([4, 7, 2, 5]));
console.log(solve([3, 19, 14, 7, 2, 19, 6]));
