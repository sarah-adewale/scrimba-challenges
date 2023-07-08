// tictactoe checker
// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? 
// Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 
// if it is an "O", like so:

// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]
// We want our function to return:

// -1 if the board is not yet finished AND no one has won yet (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.


function isSolved(board) {
  // Check rows
  for (let row = 0; row < 3; row++) {
    if (board[row][0] !== 0 && board[row][0] === board[row][1] && board[row][0] === board[row][2]) {
      return board[row][0]; // Return the winner (1 for "X", 2 for "O")
    }
  }

  // Check columns
  for (let col = 0; col < 3; col++) {
    if (board[0][col] !== 0 && board[0][col] === board[1][col] && board[0][col] === board[2][col]) {
      return board[0][col]; // Return the winner (1 for "X", 2 for "O")
    }
  }

  // Check diagonals
  if (board[0][0] !== 0 && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
    return board[0][0]; // Return the winner (1 for "X", 2 for "O")
  }
//   check anti-diagonals
  if (board[0][2] !== 0 && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
    return board[0][2]; // Return the winner (1 for "X", 2 for "O")
  }

  // Check for empty spots
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] === 0) {
        return -1; // The game is not finished
      }
    }
  }

  return 0; // It's a draw (cat's game)
}

const board = [
  [0, 0, 1],
  [0, 1, 2],
  [2, 1, 0]
];

console.log(isSolved(board), -1);



// function isBoardFull(board){
  
// }

// // Test Case 1
// const board1 = [
//   [0, 0, 1],
//   [0, 1, 0],
//   [1, 0, 1]
// ];
// console.log(isSolved(board1)); // Expected output: 1



