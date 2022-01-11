function slove(num1, num2, operator){
    let num1Type = typeof(num1);
    let num2Type = typeof(num2);

    if (num1Type === 'number' && num2Type === 'number'){
        let result;
        switch(operator){
            case '+': result = num1 + num2; break;
            case '-': result = num1 - num2; break;
            case '*': result = num1 * num2; break;
            case '/': result = num1 / num2; break;
            case '%': result = num1 % num2; break;
            case '**': result = num1 ** num2; break;            
        }
        console.log(result);
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
}


slove(5, 6, '+');
slove(3, 5.5, '*');