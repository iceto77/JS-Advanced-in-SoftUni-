function slove(n, m){
    let startNum = Number(n);
    let endNum = Number(m);
    let result = 0;
    for (let i = startNum; i <= endNum; i++){
        result  += i;
    }
    console.log(result);
}

slove('1', '5' )