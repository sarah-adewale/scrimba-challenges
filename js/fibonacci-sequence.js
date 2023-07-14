// The Fibonacci sequence is a mathematical sequence of numbers that goes like this until infinity:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...
// This sequence begins with the numbers 0 and 1, and each subsequent number is the sum of the previous two numbers of the sequence. 
// For example, the number 55 was computed because it is the sum of the previous two numbers, which are 21 and 34.



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