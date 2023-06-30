
// memoization approach
function fibonacci(n, memo={}){
    if(n === 0 || n === 1){
        return n
    }

    if(!memo[n]){
        memo[n] = fibonacci(n - 2, memo) + fibonacci(n - 1, memo)
    }
    return memo[n]
}

console.log(fibonacci(70))

// bottom up approach
function fib(n){
    if(n === 0){
        return 0
    }

    let a = 0
    let b = 1

    for(let i = 1; i < n; i++){
        let temp = a
        a = b
        b = temp + a

    }
    return b
}