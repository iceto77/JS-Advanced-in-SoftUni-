function slove(input){
    let numberArray = input;
    let sum = 0;
    let inverseSum = 0;
    let concatenateSum = '';
    for(let i = 0; i < numberArray.length; i++){
        sum += numberArray[i];
        inverseSum += 1 / numberArray[i];
        concatenateSum += numberArray[i].toString();
    }
    console.log(sum);
    console.log(inverseSum);
    console.log(concatenateSum);

}

slove([1, 2, 3]);
slove([2, 4, 8, 16]);