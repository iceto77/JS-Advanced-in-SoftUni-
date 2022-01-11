function slove(arg1, arg2, arg3){
    let result;
    if(arg1 > arg2 && arg1 > arg3){
        result = arg1;
    }
    else if(arg2 > arg1 && arg2 > arg3){
        retresult = arg2;
    }
    else{
        result = arg3;
    }    
    console.log('The largest number is ' + result)
}

slove(5, -3, 16);
slove(-3, -5, -22.5);