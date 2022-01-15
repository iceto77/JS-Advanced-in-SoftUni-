function slove(input){
    input.sort((a, b) => a - b);
    input.splice(2)
    console.log(input.join(' '));
}

slove([30, 15, 50, 5]);
slove([3, 0, 10, 4, 7, 3]);