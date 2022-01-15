function solve(num1, num2){
    let n = Number(num1);
    let k = Number(num2);
    let result = [1, 1];
    for(let i = 2; i < n; i++){
        let sum = 0;
        let start = i - k;
        if(start < 0){
            start = 0;
        }
        for(let j = start; j < result.length; j++){
            sum += result[j];
        }
        result[i]= sum;
    }
    console.log(result);
}

solve(6, 3);
solve(8, 2);