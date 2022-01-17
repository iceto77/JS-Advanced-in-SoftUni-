function solve(input){
    let result = [];
    let num = input.length;
    for(let i = 0; i < num ; i++){
        if(i % 2 == 0){
            input.sort((a,b) => b - a);
        } else {
            input.sort((a,b) => a - b);
        }
        result.push(input.pop());
    }
    return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));

