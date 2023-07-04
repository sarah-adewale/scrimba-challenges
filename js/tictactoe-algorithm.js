

// class TicTacToe{
//     constructor(n){
//         this.board = new Array(n).fill(null).map(() => new Array(n).fill(0)) //2D array representation of of the game board initialized with 
//         //n rows and n columns
//         this.players = [1,2] //an array containing the IDs of the players 1 and 2
//         this.currentPlayer = this.players[0]
//         this.moves = 0 //keeps track of the moves made in the game, it is initialized as 0 because no moves has been made
//         this.maxMoves = n * n // stores the maximum number of moves possible in the game
//     }
// //n represents the size of the grid

// //initialize your variables

//     move(row, col) {
//         // if the value on the board does not correspond with the initial value, it means the specified cell is already occupied
//         if(this.board[row][col] !== 0){
//             return -1
//         }

//         // else place the players mark on the board
//         this.board[row][col] = this.currentPlayer
//         //and increment the moves
//         this.moves++

//         // check for wins
//         if(this.checkWin(row, col)){
//             // if the current player wins the game, the ID is returned
//             return this.currentPlayer
//         }

//         // check for game draw
//         if(this.moves === this.maxMoves){
//             //if the maximum number of moved is reached, the game is a draw and 0 is returned
//             return 0
//         }

//         // switch to the next player
//         this.currentPlayer = this.players[this.currentPlayer === 1 ? 1 : 0]
//         //return 1 to indicate the game is still in progress
//         return -1
//     }

//     // create a checkWin function that checks which player wins
//     // checks winning condition
//     checkWin(row, col) {

//         const player = this.board[row][col] //stores the ID of the current player
//         const n = this.board.length //represents the length of the board

//         // check for row win
//         let count = 0
//         for(let i = 0; i < n; i++){
//             if(this.board[row][i] === player){
//                 count++
//             }
//         }

//         if(count === n){
//             return true
//         }

//         //check for column win
//         count = 0
//         for(let i = 0; i < n; i++){
//             if(this.board[col][i] === player){
//                 count++
//             }
//         }
//         if(count === n){
//             return true
//         }

//         // check for diagonal win top left to bottom right
//         if(row === col){
//             count = 0

//             for(let i = 0; i < n; i++){
//                 if(this.board[i][i] === player){
//                     count++
//                 }
//             }
//             if(count === n){
//                 return true
//             }
//         }

//         // check for anti diagonal top right to bottom left
//         if(row + col === n - 1){
//             count = 0

//             for(let i = 0; i < n; i++){
//                 if(this.board[i][n - 1 - i] === player){
//                     count++
//                 }
//             }

//             if(count === n){
//                 return true
//             }
//         }

//         return false
//     }
// }

// const toe = new TicTacToe(3)

// console.log(toe.move(0, 0))
// console.log(toe.move(0, 2))
// console.log(toe.move(2, 1))


// define the tictactoe class using es6 syntax
// create a new instance of class by calling the construction function, the function takes in a parameter n representing 
// the size of the game board.
// inside the constructor the instance properties row, col, diagonal and anti-diagonal are initialized. the rows and cols are
// arrays of length n filled with 0. the diagonal and antiDiagonal are set to 0 initially. the n property is assigned to the value of n
// class TicTacToe {
//   constructor(n) {
//     this.rows = new Array(n).fill(0);
//     this.cols = new Array(n).fill(0);
//     this.diagonal = 0;
//     this.anti = 0;
//     this.n = n;
//   }

// //   we define the move method of the tictactoe class

//   move(row, col, player) {
//     const add = player === 1 ? 1 : -1;
//     this.rows[row] += add;
//     this.cols[col] += add;

//     if (row === col) {
//       this.diagonal += add;
//     }
//     if (col === this.cols.length - row - 1) {
//       this.anti += add;
//     }

//     if (
//       this.rows[row] === this.n ||
//       this.cols[col] === this.n ||
//       this.diagonal === this.n ||
//       this.anti === this.n
//     ) {
//       return 1;
//     }

//     if (
//       this.rows[row] === -this.n ||
//       this.cols[col] === -this.n ||
//       this.diagonal === -this.n ||
//       this.anti === -this.n
//     ) {
//       return 2;
//     }

//     return 0;
//   }
// }


class TicTacToe {
  constructor(n) {
    this.grid = new Array(n).fill(null).map(() => new Array(n).fill(0));
    this.n = n;
  }

  move(row, col, player) {
    if (this.grid[row][col] !== 0) {
      // Invalid move, block already occupied
      return -1;
    }
// place the players mark
    this.grid[row][col] = player;

    // checks for win
    if (this.checkWin(player)) {
      return player;
    }

    // checks if the board is full 
    if (this.isBoardFull()) {
      // Draw, no more moves available
      return 0;
    }

    // Game ongoing, return -1
    return -1;
  }

  checkWin(player) {
    const n = this.n;

    // Check rows
    for (let row = 0; row < n; row++) {
      let win = true;
      for (let col = 0; col < n; col++) {
        if (this.grid[row][col] !== player) {
          win = false;
          break;
        }
      }
      if (win) return true;
    }

    // Check columns
    for (let col = 0; col < n; col++) {
      let win = true;
      for (let row = 0; row < n; row++) {
        if (this.grid[row][col] !== player) {
          win = false;
          break;
        }
      }
      if (win) return true;
    }

    // Check diagonals
    let win = true;
    for (let i = 0; i < n; i++) {
      if (this.grid[i][i] !== player) {
        win = false;
        break;
      }
    }
    if (win) return true;

    // antiDiagonal
    win = true;
    for (let i = 0; i < n; i++) {
      if (this.grid[i][n - 1 - i] !== player) {
        win = false;
        break;
      }
    }
    if (win) return true;

    return false;
  }

//   check if all the cells are filled
  isBoardFull() {
    const n = this.n;
    for (let row = 0; row < n; row++) {
      for (let col = 0; col < n; col++) {
        if (this.grid[row][col] === 0) {
          return false;
        }
      }
    }
    return true;
  }
}



// Example usage
const obj = new TicTacToe(3);

console.log(obj.move(0, 0, 1)); // 0
console.log(obj.move(0, 2, 2)); // 0
console.log(obj.move(2, 2, 1)); // 0
console.log(obj.move(1, 1, 2)); // 0
console.log(obj.move(2, 0, 1)); // 0
console.log(obj.move(1, 0, 2)); // 0
console.log(obj.move(2, 1, 1)); // 1



// pseudo code for tictactoe algorithm

// create an es6 class called titactoe
    // initialize a constructor using the constructor keyword
        //initialize all your variables
            // fill each cells in the board with zero and attach it to a variable called board
            // initialize the players variable with the ids of the players [1,2]
            // initializa the moves variable and assign it the value of 0
            // initialize the maxMoves to maximum number of moves and assign it n * n
    
    // create a moves function with row and col indexes as parameters
        // check if the cells are already occupied
            // if board[row][col] !== 0 return -1
        // check for winner
            //if winnint function is  
