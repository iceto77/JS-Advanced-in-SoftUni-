function slove(input){
    let array = [];
    for(let i = 0; i < input.length; i++){
        if(input[i] < 0){
            array.unshift(input[i]);
        } else {
            array.push(input[i]);
        }
    };
    console.log(array.join('\n'));
};

slove([7, -2, 8, 9]);
//slove([3, -2, 0, -1]);