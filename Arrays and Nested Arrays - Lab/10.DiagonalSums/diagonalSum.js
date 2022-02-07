function solve(input) {
    let matrix = Array(input);
    let result = [];
    let mainDiagonal = 0;
    let secondaryDiagonal = 0;    
    for (let i = 0; i < matrix[0].length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (i == j) {
                mainDiagonal += input[i][j];
            };
            if (j == (matrix[0].length - 1 - i)) {
                secondaryDiagonal += input[i][j];
            };
        };
    };
    result.push(mainDiagonal);
    result.push(secondaryDiagonal);
    console.log(result.join(' '));

}

solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);