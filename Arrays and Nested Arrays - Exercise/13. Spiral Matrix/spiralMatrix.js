function solve(width, height) {

    let matrix = new Array(height);
    for (let i = 0; i < height; i++) {
        matrix[i] = new Array(width);
        matrix[i].fill(0, 0, width);
    };
    let count = 1;
    let x = 0;
    let y = 0;
    move = 'right';
    while (count <= width * height) {
        matrix[x][y] = count++;
        if (move == 'right' && y + 1 < width && matrix[x][y + 1] == 0) {
            y++;
            if(y + 1 == width || matrix[x][y + 1] != 0){
                move = 'down';
            };
        } else if (move == 'down' && x + 1 < height && matrix[x + 1][y] == 0) {
            x++;
            if(x + 1 == height || matrix[x + 1][y] != 0){
                move = 'left';
            };
        } else if (move == 'left' && y - 1 >= 0 && matrix[x][y - 1] == 0) {
            y--;
            if(y - 1 < 0 || matrix[x][y - 1] != 0){
                move = 'up';
            };
        } else if (move == 'up' && x - 1 >= 0 && matrix[x - 1][y] == 0) {
            x--;
            if(x - 1 < 0 || matrix[x - 1][y] != 0){
                move = 'right';
            };
        };

    };
    for(let i = 0; i < height; i++){
        console.log(matrix[i].join(' '));
    };

}

solve(5, 5);
//solve(3, 3);