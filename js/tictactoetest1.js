// pseudoCode

// create a tictactoe class and instantiate a constructor with 'n' parameter to represent the size of the board
class TicTacToe{
     // in the constructor create instances 
    constructor(n){
        // initialize a new array for the grid filled with values 0
        this.board = new Array(n).fill(null).map(() => new Array(n).fill(0))
        // initialize n as the size of the grid
        this.n = n
    }

    // create a move method to check the moves of each player add player,row and col as parameters for the move method
    // the player represents each player, the row represent each row on the board, the col represents each column on the board
    move(row, col, player){
         // check for invalid move
         // if the board[col][row] !== 0 it means it is already occupied and that is an invalid move, return -1 else
         if(this.board[row][col] !== 0){
            return -1
         }
          // place players mark on the board as board[row][col] = player
        this.board[row][col] = player
           
        // check for win
            // if checkWin function is true, return winning player
            if(this.checkWin(player)){
                return player
            }
        // check for draw
            // call the boardfull function and return 0 to indicate a draw
            if(this.isBoardFull()){
                return 0
            }
         // else return -1 to indicate that the game is still ongoing
        return -1
    }

   // create a checkWin Method to check each win instances add player as parameter
   checkWin(player){
     // initialize n as the size of the grid
    const n = this.n
     // check row win
            // create a loop thru the row up to n
            for(let row = 0; row < n; row++){
                 // initialize a win variable and assign it a true value
                 let win = true
                 // inside the loop create another loop thru the col up to n
                 for(let col = 0; col < n; col++){
                     // if board[rol][col] !== player, win = false then break
                    if(this.board[row][col] !== player){
                        win = false
                        break;
                    }
                 }
                 // if win is true, return true
                 if(win) return true
            }
            // check column win
            // create a loop thru the col up to n
            for(let col = 0; col < n; col++){
                 // initialize a win variable and assign it a true value
                let win = true
                 // inside the loop create another loop thru the row up to n
                 for(let row = 0; row < n; row++){
                    // if board[row][col] !== player, win = false then break
                    if(this.board[row][col] !== player){
                        win = false
                        break;
                    }
                 }
                 // if win is true, return true
                 if(win) return true
                
            }
               
             // check diagonal win
            // initialize win to true
            let win = true
            // create a loop from zero to n
            for(let i = 0; i < n; i++){
                 // if board[i][i] !== player, return false
                if(this.board[i][i] !== player){
                    return false
                }
            }
               
            // if win is true, return true
            if(win) return true
                
               // check anti-diagonal win
            // initialize win to true
             win = true
            // create a loop from zero to n
            for(let i = 0; i < n; i++){
                // if board[i][n - 1 - i] !== player, return false
                if(this.board[i][n - 1 - i] !== player){
                    return false
                }
            }
            // if win is true, return true
            if(win) return true
            // return false
            return false
   }

      // create a boardfull method to check if the board is full
      isBoardFull(){
         // create a loop thru row to n
         for(let row = 0; row < this.n; row++){
             // create an inner loop thru col to n
            for(let col = 0; col < this.n; col++){
                // if board[row][col] === 0 return false
                if(this.board[row][col] === 0){
                    return false
                }
            }
         }
            // return true
            return true
      }

}
// to test
    // create a new tictactoe
const obj = new TicTacToe(3);

console.log(obj.move(0, 0, 1)); // -1
console.log(obj.move(0, 2, 2)); // -1
console.log(obj.move(2, 2, 1)); // -1
console.log(obj.move(1, 1, 2)); // -1
console.log(obj.move(2, 0, 1)); // -1
console.log(obj.move(1, 0, 2)); // -1
console.log(obj.move(2, 1, 1)); // 1
