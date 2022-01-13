function slove(input) {
    let isSame = true;
    let sumOfDigit = 0;
    let inputNumber = input.toString();
    let firstDifit = inputNumber[0];
    for( let i = 0; i < inputNumber.length; i++) {
        sumOfDigit += +inputNumber[i];
        if(inputNumber[i] !== firstDifit){
            isSame = false;
        };
    };
    console.log(isSame );
    console.log(sumOfDigit);
}

slove(2222222);
slove(1234);