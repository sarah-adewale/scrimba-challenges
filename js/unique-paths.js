
function uniquePaths(rows, columns, memo={}){
    if(rows === 1 || columns === 1) return 1

    if(!memo[[rows, columns]]){
       memo[[rows, columns]] = uniquePaths(rows - 1, columns, memo) + uniquePaths(rows, columns - 1, memo)
    }
    return memo[[rows, columns]]
}