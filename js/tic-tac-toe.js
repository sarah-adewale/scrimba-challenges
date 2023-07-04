class TicTacToe {
  constructor() {
    this.board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ];
    this.currentPlayer = 'X';
  }

  makeMove(row, col) {
    if (this.board[row][col] === ' ') {
      this.board[row][col] = this.currentPlayer;
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      return true; // Move is valid
    } else {
      return false; // Move is invalid
    }
  }

  checkWin() {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (
        this.board[i][0] !== ' ' &&
        this.board[i][0] === this.board[i][1] &&
        this.board[i][0] === this.board[i][2]
      ) {
        return this.board[i][0]; // Return the winning player
      }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
      if (
        this.board[0][i] !== ' ' &&
        this.board[0][i] === this.board[1][i] &&
        this.board[0][i] === this.board[2][i]
      ) {
        return this.board[0][i]; // Return the winning player
      }
    }

    // Check diagonals
    if (
      this.board[0][0] !== ' ' &&
      this.board[0][0] === this.board[1][1] &&
      this.board[0][0] === this.board[2][2]
    ) {
      return this.board[0][0]; // Return the winning player
    }
    if (
      this.board[0][2] !== ' ' &&
      this.board[0][2] === this.board[1][1] &&
      this.board[0][2] === this.board[2][0]
    ) {
      return this.board[0][2]; // Return the winning player
    }

    // Check for a draw
    if (!this.isMovesLeft()) {
      return 'Draw';
    }

    // Game is still ongoing
    return 'Pending';
  }

  isMovesLeft() {
    for (let row of this.board) {
      for (let cell of row) {
        if (cell === ' ') {
          return true; // There is an empty cell, moves are left
        }
      }
    }
    return false; // No empty cell, no moves left
  }
}

// Example usage:
const game = new TicTacToe();
console.log(game.makeMove(0, 0)); // true
console.log(game.makeMove(1, 1)); // true
console.log(game.makeMove(0, 1)); // true
console.log(game.makeMove(1, 2)); // true
console.log(game.makeMove(0, 2)); // 'X' wins
