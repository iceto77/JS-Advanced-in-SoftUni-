function solve(turns) {
    let board = [[false, false, false],
    [false, false, false],
    [false, false, false]];
    let mark = 'X';
    let turn = 0;
    while (turns.length > 0 && turn < 9) {
        let [x, y] = turns.shift().split(' ');
        x = Number(x);
        y = Number(y);
        if (board[x][y] == false) {
            board[x][y] = mark;
            turn++;
            //console.log(board.join('\t \n'));
            if(chekForWinner(mark)){
                console.log(`Player ${mark} wins!`);
                break;
            };
            if (mark === 'X') {
                mark = 'O';
            } else {
                mark = 'X';
            };

        } else {
            console.log('This place is already taken. Please choose another!');
        }
    };
    if (turn == 9) {
        console.log('The game ended! Nobody wins :(');
    };
    for (let item of board) {
        console.log(item.join('\t'));        
    }
    function chekForWinner(sign) {
        for (let i = 0; i < board.length; i++) {
            if (board[i][0] !== false && board[i][0] == board[i][1] && board[i][1] == board[i][2]) {
                return true;
            };
            if (board[0][i] !== false && board[0][i] == board[1][i] && board[1][i] == board[2][i]) {
                return true;
            };
            if (board[0][0] !== false && board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
                return true;
            };
            if (board[0][2] !== false && board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
                return true;
            };
            return false;
        };
    };
}


solve(["0 1", "0 0", "0 2",  "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
solve(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);
solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);

