function slove(input){
    let array = [];
    for(let i = 0; i < input.length; i++){
        array[i]= Number(input[i]);
    };
    let sum = array.pop();
    sum += array.shift();
    console.log(sum);
};

slove(['20', '30', '40']);
slove(['5', '10']);
