function solve(n, k){
    let result = [];
    for(i = 0; i < n; i++){
        if(i < 2){
            result.push(1);
        } else {
            let sum = 0;
            let target = result.slice();
            for(j = 0; j < k  ; j++){
                if(target.length > 0){
                    sum += target.pop();
                }
            }
            result.push(sum);
        }
    }
    return result;
}

console.log(solve(6, 3));
console.log(solve(8, 2));