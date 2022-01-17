function solve(input){
    let biggest = input[0][0];
    for(i = 0; i < input.length; i++){
        for(num of input[i]){
            if(num > biggest){
                biggest = num;
            };
        };
    };
    console.log(biggest);    
}


solve([[20, 50, 10],
    [8, 33, 145]]);

/*solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   ); */
