// Given a Tic-Tac-Toe board as a string array board, return true if and only if it is possible to reach this board position during the course of a valid tic-tac-toe game.

// The board is a 3 x 3 array that consists of characters ' ', 'X', and 'O'. The ' ' character represents an empty square.

// Here are the rules of Tic-Tac-Toe:

// Players take turns placing characters into empty squares ' '.
// The first player always places 'X' characters, while the second player always places 'O' characters.
// 'X' and 'O' characters are always placed into empty squares, never filled ones.
// The game ends when there are three of the same (non-empty) character filling any row, column, or diagonal.
// The game also ends if all squares are non-empty.
// No more moves can be played if the game is over.
 

// Example 1:


// Input: board = ["O  ","   ","   "]
// Output: false
// Explanation: The first player always plays "X".
// Example 2:


// Input: board = ["XOX"," X ","   "]
// Output: false
// Explanation: Players take turns making moves.
// Example 3:


// Input: board = ["XOX","O O","XOX"]
// Output: true
 

// Constraints:

// board.length == 3
// board[i].length == 3
// board[i][j] is either 'X', 'O', or ' '.




const validTicTacToe = (board) => {
  let xCount = 0;
  let oCount = 0;

  // Count the number of X's and O's on the board
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === 'X') {
        xCount++;
      } else if (board[i][j] === 'O') {
        oCount++;
      }
    }
  }

  // Check if the number of X's is equal to or one more than the number of O's
  if (oCount !== xCount && oCount !== xCount - 1) {
    return false;
  }

  // Check for win conditions
  if (isWinning(board, 'X') && xCount !== oCount + 1) {
    return false;
  }

  if (isWinning(board, 'O') && xCount !== oCount) {
    return false;
  }

  return true;
};

// Helper function to check if a player has won
function isWinning(board, player) {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] === player &&
      board[i][1] === player &&
      board[i][2] === player
    ) {
      return true;
    }
  }

  // Check columns
  for (let j = 0; j < 3; j++) {
    if (
      board[0][j] === player &&
      board[1][j] === player &&
      board[2][j] === player
    ) {
      return true;
    }
  }

  // Check diagonals
  if (
    (board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player) ||
    (board[0][2] === player &&
      board[1][1] === player &&
      board[2][0] === player)
  ) {
    return true;
  }

  return false;
}


console.log(validTicTacToe(["O  ","   ","   "]), false)
console.log(validTicTacToe(["XOX"," X ","   "]), false)
console.log(validTicTacToe(["XOX","O O","XOX"]), true)