function solve(arr, startIndex, endIndex){
    if(!Array.isArray(arr)){
        return NaN;
    }
    if(startIndex < 0){
        startIndex = 0;
    }
    if(endIndex > arr.length - 1){
        endIndex = arr.length - 1;
    }

    let subNumbers = arr.slice(startIndex,endIndex + 1);
    let sum = subNumbers.reduce((a,x) => a + Number(x), 0);
    console.log(sum);
    return sum;
}

solve([10, 20, 30, 40, 50, 60], 3, 300);