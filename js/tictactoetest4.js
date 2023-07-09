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

function tictactoe(moves){
    // a 2D n x n board
    let board = new Array(3).fill(null).map(() => new Array(3).fill(''))
    // loop thru the length of the moves to create row and columns for the grid
    for(let i = 0; i < moves.length; i++){
        // create a row and col variable to represent each moves
        const [row, col] = moves[i]
        // create a player variable to represent each player on the board
        const player = i % 2 === 0 ? 1 : 2
        // place each players mark on the board
        board[row][col] = player

        if(checkWin(player, board)){
            return player
        }
    }

    // check for a draw
    if(moves.length === 9){
        return 0
    }
// pending or invalid move
   return -1
}

function checkWin(player, board){
    let n = board.length
    // check row win
    for(let row = 0; row < n; row++){
        if(board[row][0] === player && board[row][1] === player && board[row][2] === player){
            return true
        }
    }
    // check col win
    for(let col = 0; col < n; col++){
        if(board[0][col] === player && board[1][col] === player && board[2][col] === player){
            return true
        }
    }
    // check diagonal win top left to bottom right
    if(board[0][0] === player && board[1][1] === player && board[2][2] === player){
        return true
    }
    
    // check anti-diagonal win
    if(board[0][2] === player && board[1][1] === player && board[2][0] === player){
        return true
    }
    return false
}

console.log(tictactoe([[2,1]])); // Output: 1