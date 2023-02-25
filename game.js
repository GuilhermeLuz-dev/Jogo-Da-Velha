let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let symbols = ['x', 'o'];
let gameOver = false;
let seqWins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function handleMove(position) {

    if (gameOver) {
        return
    }

    board[position] = symbols[playerTime];
    gameOver = isWin()
    playerTime = (playerTime == 0) ? 1 : 0;

    return gameOver
}

function isWin() {
    for (let i = 0; i < seqWins.length; i++) {
        let sequence = seqWins[i];
        let seq0 = sequence[0];
        let seq1 = sequence[1];
        let seq2 = sequence[2];


        if (board[seq0] == board[seq1] &&
            board[seq0] == board[seq2] &&
            board[seq0] != '') {
            return true
        }

    }
    return false
}