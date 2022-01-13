function slove(a, b){
let numA = Number(a);
let numB = Number(b);
while(numA !== numB){
    if(numA > numB){
        numA -= numB;
    } else {
        numB -= numA;
    }
}
console.log(numA);
}

slove(15, 5);
slove(2154, 458);