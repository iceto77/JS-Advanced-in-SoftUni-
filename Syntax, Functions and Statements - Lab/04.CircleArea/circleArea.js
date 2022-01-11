function slove(input){
    let inputType = typeof(input);
    if (inputType === 'number'){
        let result = Math.PI * Math.pow(input, 2);
        console.log(result.toFixed(2))
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
}

slove(5);
slove('name');