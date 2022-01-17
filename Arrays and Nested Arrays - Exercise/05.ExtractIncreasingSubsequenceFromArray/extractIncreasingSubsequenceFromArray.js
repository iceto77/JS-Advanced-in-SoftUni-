function solve(input){
    let bigger = input[0];
    let result = [];
    for(num of input){
        if(num >= bigger){
            result.push(num);
            bigger = num;
        }
    }
    return result;
}

console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(solve([1, 2, 3, 4]));
console.log(solve([20, 3, 2, 15, 6, 1]));

//
//