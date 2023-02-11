// a child is running up a staircase with n steps, and can hop on either 1 steps, 2 steps or 3 steps at a time. Implement a method to
// count how many possible ways the child can run up the stairs.

// using the top-down sub-problem approach
    // steps
        // imagine the function actually works
        // identify next to base case ()
        // identify base case
        // return your answer

// pseudo
// create a function

function countWays(n, memo={}){
    if(n < 0) return 0
    
    if (n === 0 || n === 1) return 1

    if(!memo[n]){
        memo[n] = countWays(n - 1, memo) + countWays(n - 2, memo) + countWays(n - 3, memo)
    }
        return memo[n]

}


console.log(countWays(5))

