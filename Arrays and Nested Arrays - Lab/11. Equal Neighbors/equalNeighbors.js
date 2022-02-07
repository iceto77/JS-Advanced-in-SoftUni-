function solve(input) {
    let result = 0;
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            if (i != input.length - 1 && input[i][j] == input[i + 1][j]) {
                result++;
            };
            if (j != input.length - 1 && input[i][j] == input[i][j + 1]) {
                result++;
            };
        };
    };
    return result;
};

console.log(solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]));
solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]);