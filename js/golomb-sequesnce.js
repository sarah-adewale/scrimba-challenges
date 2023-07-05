
function golomb(n, memo={}){
    if(n === 1) return 1
    if(!memo[n]){
    memo[n] = 1 + golomb(n - golomb(golomb(n - 1), memo), memo)
    }
    return memo[n]
}