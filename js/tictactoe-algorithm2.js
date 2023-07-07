// Tic-tac-toe is played by two players A and B on a 3 x 3 grid. The rules of Tic-Tac-Toe are:

// Players take turns placing characters into empty squares ' '.
// The first player A always places 'X' characters, while the second player B always places 'O' characters.
// 'X' and 'O' characters are always placed into empty squares, never on filled ones.
// The game ends when there are three of the same (non-empty) character filling any row, column, or diagonal.
// The game also ends if all squares are non-empty.
// No more moves can be played if the game is over.
// Given a 2D integer array moves where moves[i] = [rowi, coli] indicates that the ith move will be played on grid[rowi][coli]. 
// return the winner of the game if it exists (A or B). In case the game ends in a draw return "Draw". If there are still 
// movements to play return "Pending".

// You can assume that moves is valid (i.e., it follows the rules of Tic-Tac-Toe), the grid is initially empty, and A will play first.


// Example 1:


// Input: moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]
// Output: "A"
// Explanation: A wins, they always play first.
// Example 2:


// Input: moves = [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]
// Output: "B"
// Explanation: B wins.
// Example 3:


// Input: moves = [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]
// Output: "Draw"
// Explanation: The game ends in a draw since there are no moves to make.
 

// Constraints:

// 1 <= moves.length <= 9
// moves[i].length == 2
// 0 <= rowi, coli <= 2
// There are no repeated elements on moves.
// moves follow the rules of tic tac toe.


const tictactoe = (moves) => {
    // create a 2D grid filled with an empty string to represent the size of the board
  const grid = new Array(3).fill(null).map(() => new Array(3).fill(''));
//   create a loop thru the length of the moves. 
  for (let i = 0; i < moves.length; i++) {
    // inside the loop create a row and col variable using destructuring method and assign
// it each individual move.
    const [row, col] = moves[i];
    // create a player variable to represent each player. assign even to player A and odd to player B
    const player = i % 2 === 0 ? 'A' : 'B';
    // save the players mark on the grid
    grid[row][col] = player;
    // checks it theres a win. if the checkWin function is true, return the winning player
    if (checkWin(grid, player))
      return player;
  }
//   checks if theres a draw. if the grid is full, it means all player has played and there was a draw and the game has ended
  if (moves.length === 9)
    return "Draw";

    // if all the above is false, return pending to indicate the game is still ongoing
  return "Pending";
};

const checkWin = (grid, player) => {
    // initialize n as the size of the grid
    let n = grid.length
  // Check rows win
//   create a loop thru the rows up to the size of the grid
  for (let row = 0; row < n; row++) {
    // if the first row is filled and is equal to the player, and if the second row is filled and equal to the player and it the 
    // third row is filled and equal to the player, return true
    if (grid[row][0] === player && grid[row][1] === player && grid[row][2] === player)
      return true;
  }

  // Check columns
//   create a loop thru the length of the column
  for (let col = 0; col < n; col++) {
    // if the first column on the grid is equal to the player, and the second column on the grid is equal to the player and the 
    // third coloumn on the grid is equal to the player, return true
    if (grid[0][col] === player && grid[1][col] === player && grid[2][col] === player)
      return true;
  }

  // Check diagonals
//   conditional to check top-left to bottom right. if the first cell at the oth index is equal to the player, and the 2nd cell at 
// index 1 is equal to the player and the 3rd cell at index 2 is equal to the player. return true
  if (grid[0][0] === player && grid[1][1] === player && grid[2][2] === player)
    return true;

    // check anti-diagonals
//   conditional to check top-right to bottom left. if the first cell at index 2 is equal to the player and the 2nd cell at index 1 is 
// equal to the player and the third cell at 0th row index is equal to the player, return true
  if (grid[0][2] === player && grid[1][1] === player && grid[2][0] === player)
    return true;
// else return false
  return false;
};


console.log(tictactoe([[0,0],[2,0],[1,1],[2,1],[2,2]])); // Output: "A"
console.log(tictactoe([[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]])); // Output: "B"
console.log(tictactoe([[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]])); // Output: "Draw"
console.log(tictactoe([[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]])); // Output: "Draw"
