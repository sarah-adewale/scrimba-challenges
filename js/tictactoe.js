function isValidTicTacToe(boards){
    let xWins = 0
    let oWins = 0
    let invalidBoards = 0

    // create a loop
    for(let b = 0; b < boards.length; b++){
        const board = boards[b]
        const rows = board.split(' ')
        const gridSize = rows[0]
        const gridData = rows.slice(1)

        if(isValidGrid(gridData, gridSize)){
        const result = determineWinner(gridData, gridSize)
        if(result  === 'X'){
            xWins++
        }else if(result === '0'){
            oWins++
        }
    }else{
        invalidBoards++
    }
    }

   

    return {x: xWins, o: oWins, invalid: invalidBoards }
}

function isValidGrid(gridData, gridSize){
    let countX = 0
    let countO = 0
for(let r = 0; r < gridSize; r++){
    const row = gridData[r]

    for(let c = 0; c < gridSize; c++){
        const cell = row[c]
        if(cell === 'X'){
            countX++
        }else if(cell === 'O'){
            countO++
        }
    }
}

    return countX === countO || countX === countO + 1
}

function determineWinner(gridData, gridSize){
//    check row
    for(let r = 0; r < gridSize; r++){
    const row = gridData[r]
    if(row === 'XXX') return 'X'
    if(row === 'OOO') return 'O'
   }

   for(let c = 0; c < gridSize; c++){
    let columnString = ''
    for(let r = 0; r < gridSize; r++){
        const cell = gridData[r][c]
        columnString += cell
    }
    if(columnString === 'XXX') return 'X'
    if(columnString === 'OOO') return 'O'
   }

   let diagonal = ''
   let antiDigonal = ''

   for(let i = 0; i < gridSize; i++){
    diagonal += gridData[i][i]
    antiDigonal += gridData[i][gridSize - i - 1]
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

const result = isValidTicTacToe(input);
console.log(result); // { x: 2, o: 1, invalid: 2 }

console.log(isValidTicTacToe(input))