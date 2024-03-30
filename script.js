let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function makeMove(cell, row, col) {
    if (gameActive && !board[row * 3 + col]) {
        board[row * 3 + col] = currentPlayer;
        cell.textContent = currentPlayer;
        
        if (checkWinner()) {
            document.getElementById('message').textContent = `Player ${currentPlayer} wins!`;
            gameActive = false;
        } else if (board.every(cell => cell !== '')) {
            document.getElementById('message').textContent = "It's a tie!";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWinner() {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    return winConditions.some(condition =>
        board[condition[0]] !== '' &&
        board[condition[0]] === board[condition[1]] &&
        board[condition[1]] === board[condition[2]]
    );
}

function resetGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    document.getElementById('message').textContent = '';
    document.querySelectorAll('.cell').forEach(cell => {
        cell.textContent = '';
    });
}