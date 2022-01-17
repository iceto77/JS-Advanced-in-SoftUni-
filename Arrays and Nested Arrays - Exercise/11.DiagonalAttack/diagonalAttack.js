function solve(input){
    let matrix = [];
        while(input.length > 0){
        matrix.push(input.shift().split(' ').map(Number));
    };
    let mainDiagonal = 0;
    let secondaryDiagonal = 0;
    for(let i = 0; i < matrix.length; i++){
        mainDiagonal += matrix[i][i];
        secondaryDiagonal += matrix[i][matrix.length - i - 1];
    };
    if(mainDiagonal === secondaryDiagonal){
        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix.length; j++){
                if((i !== j) && (j !== (matrix.length - i -1))){
                    matrix[i][j] = mainDiagonal;
                };
            };
        };
    };
    for(let i =0; i < matrix.length; i++){
        console.log(matrix[i].join(' '));
    };
}

solve(['5 3 12 3 1',
       '11 4 23 2 5',
       '101 12 3 21 10',
       '1 4 5 2 2',
       '5 22 33 11 1']);   