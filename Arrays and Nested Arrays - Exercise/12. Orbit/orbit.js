function solve(input) {
    let [width, height, x, y] = input;
    width = Number(width);
    height = Number(height);
    x = Number(x);
    y = Number(y);
    let board = [];
    for (let i = 0; i < height; i++) {
        let line = [];
        if (y === i) {
            for (let j = 0; j < width; j++) {
                line[j] = Math.abs(x - j) + 1;
            };
            line[x] = 1;
        } else {
            for (let j = 0; j < width; j++) {
                if (Math.abs(i - y) > Math.abs(j - x)) {
                    line[j] = Math.abs(i - y) + 1;
                } else if (Math.abs(i - y) <= Math.abs(j - x)) {
                    line[j] = Math.abs(j - x) + 1;
                };
            };
        };
        board[i] = line;
    };
    for(let i = 0; i < height; i++){
        console.log(board[i].join(' '));
    };
}

solve([50, 50, 21, 5]);
//solve([5, 5, 2, 2]);
//solve([3, 3, 2, 2]);