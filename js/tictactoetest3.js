// Design a Tic-tac-toe game that is played between two players on a n x n grid.

// You may assume the following rules:

// A move is guaranteed to be valid and is placed on an empty block.
// Once a winning condition is reached, no more moves is allowed.
// A player who succeeds in placing n of their marks in a horizontal, vertical, or diagonal row wins the game.
// Example🕶
// Given n = 3, assume that player 1 is "X" and player 2 is "O" in the board.

// TicTacToe toe = new TicTacToe(3);

// toe.move(0, 0, 1); -> Returns 0 (no one wins)
// |X| | |
// | | | |    // Player 1 makes a move at (0, 0).
// | | | |

// toe.move(0, 2, 2); -> Returns 0 (no one wins)
// |X| |O|
// | | | |    // Player 2 makes a move at (0, 2).
// | | | |

// toe.move(2, 2, 1); -> Returns 0 (no one wins)
// |X| |O|
// | | | |    // Player 1 makes a move at (2, 2).
// | | |X|

// toe.move(1, 1, 2); -> Returns 0 (no one wins)
// |X| |O|
// | |O| |    // Player 2 makes a move at (1, 1).
// | | |X|

// toe.move(2, 0, 1); -> Returns 0 (no one wins)
// |X| |O|
// | |O| |    // Player 1 makes a move at (2, 0).
// |X| |X|

// toe.move(1, 0, 2); -> Returns 0 (no one wins)
// |X| |O|
// |O|O| |    // Player 2 makes a move at (1, 0).
// |X| |X|

// toe.move(2, 1, 1); -> Returns 1 (player 1 wins)
// |X| |O|
// |O|O| |    // Player 1 makes a move at (2, 1).
// |X|X|X|



function createTicTacToe(n) {
  const game = {
    rows: new Array(n).fill(0),
    cols: new Array(n).fill(0),
    diagonal: 0,
    antiDiagonal: 0,
  };

  return game;
}

function move(game, row, col, player) {
  const n = game.rows.length;
  const add = player === 1 ? 1 : -1;

  game.rows[row] += add;
  game.cols[col] += add;

  if (row === col) {
    game.diagonal += add;
  }

  if (col === n - row - 1) {
    game.antiDiagonal += add;
  }

  if (
    Math.abs(game.rows[row]) === n ||
    Math.abs(game.cols[col]) === n ||
    Math.abs(game.diagonal) === n ||
    Math.abs(game.antiDiagonal) === n
  ) {
    return player;
  }

  return 0;
}

//   console.log(tictactoe(0, 0, 1)); // 0
// console.log(tictactoe(0, 2, 2)); // 0
// console.log(tictactoe(2, 2, 1)); // 0
// console.log(tictactoe(1, 1, 2)); // 0
// console.log(tictactoe(2, 0, 1)); // 0
// console.log(tictactoe(1, 0, 2)); // 0
// console.log(tictactoe(2, 1, 1)); // 1

const toe = createTicTacToe(3);

console.log(move(toe, 0, 0, 1)); // Returns 0 (no one wins)
// |X| | |
// | | | |
// | | | |

console.log(move(toe, 0, 2, 2)); // Returns 0 (no one wins)
// |X| |O|
// | | | |
// | | | |

console.log(move(toe, 2, 2, 1)); // Returns 0 (no one wins)
// |X| |O|
// | | | |
// | | |X|

console.log(move(toe, 1, 1, 2)); // Returns 0 (no one wins)
// |X| |O|
// | |O| |
// | | |X|

console.log(move(toe, 2, 0, 1)); // Returns 0 (no one wins)
// |X| |O|
// | |O| |
// |X| |X|

console.log(move(toe, 1, 0, 2)); // Returns 0 (no one wins)
// |X| |O|
// |O|O| |
// |X| |X|

console.log(move(toe, 2, 1, 1)); // Returns 1 (player 1 wins)
// |X| |O|
// |O|O| |
// |X|X|X|