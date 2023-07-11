'use strict';

/**
 * Your final solution should be implemented in the function below
 * @param {Array.<string>} input - An array containing the challenge inputs
 */
// check board win
// 


function solution(input){
    // initialize variable for X's count, O's count and invalid boards count
    let xWins = 0
    let oWins = 0
    let invalidBoards = 0

    // create a loop thru the length of the input to create board
    for(let b = 0; b < input.length; b++){
        // initialize board as individual input
        const board = input[b]
        // create each rows from the board
        const rows = board.split(' ')
        const gridSize = parseInt(rows[0].charAt(0));
        const gridData = rows.slice(1)

// conditional to check if the grid if valid using destructuring assignment
        if(isValidGrid(gridData, gridSize)){
            // check winner using the win function
        const result = checkWinner(gridData, gridSize)
        // if it is, check for winner 
            if(result  === 'X'){
                //  keep count of x wins
                xWins++
            }else if(result === '0'){
                // keep count of o wins
                oWins++
            }
        }else{
            // keep count of invalids
            invalidBoards++
        }
    }
    // return an object of count of x, count of o and count of invalid
    return {x: xWins, o: oWins, invalid: invalidBoards }
}

// check if the grid is valid
function isValidGrid(gridData, gridSize){
    let countX = 0
    let countO = 0
    
    // create a loop the size of the grid
for(let r = 0; r < gridSize; r++){
    // row represents each board in the grid
    const row = gridData[r]

    for(let c = 0; c < gridSize; c++){
        const cell = row.charAt(c);
        if(cell === 'X'){
            countX++
        }else if(cell === 'O'){
            countO++
        }
    }
}

    return countX === countO || countX === countO + 1
}

// winning function
function checkWinner(gridData, gridSize){
//    check row
    for(let r = 0; r < gridSize.length; r++){
    const row = gridData[r]
    if(row === 'XXX') return 'X'
    if(row === 'OOO') return 'O'
   }

// check column
   for(let c = 0; c < gridSize; c++){
    let columnString = ''
    for(let r = 0; r < gridSize; r++){
        const cell = gridData[r].charAt(c);
        columnString += cell
    }
    if(columnString === 'XXX') return 'X'
    if(columnString === 'OOO') return 'O'
   }

// check diagonals
   let diagonal = ''
   let antiDigonal = ''

// loop thru the length of the grid to mark diagonal cells
   for(let i = 0; i < gridSize; i++){
    diagonal += gridData[i].charAt(i);
    antiDigonal += gridData[i].charAt(gridSize - i - 1);
   }
   
   if(diagonal === 'XXX' || antiDigonal === 'XXX') return 'X' 
   if(diagonal === 'OOO' || antiDigonal === 'OOO') return '0'

   return null

}

const input = [
  "3x3 xxo oo- oxx",
  "2x2 xo x-",
  "4x4 xoxo xoxo x--- xo--",
  "3x3 xxo ooo oox",
  "3x3 xxx ooo --"
];

const result = solution(input);
console.log(result); // { x: 2, o: 1, invalid: 2 }

console.log(solution(input))

// /////////////////////// Ignore the code below //////////////////////////////////
// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.trim().split('\n');

//     main();
// });

// function main() {
//     console.log(solution(inputString));
// }
