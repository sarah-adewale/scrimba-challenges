// Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples: (Input --> output)

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

function sumCubes(n){
    //number as input
    //initialize a sum, give it a value of 0
    let sum = 0
    //loop thru the number starting from 1, to the length of the number
    for(let i = 1; i <= n; i++){
        sum += Math.pow(i, 3)
    }
    return sum
  // 
  
}

console.log(sumCubes(2))
console.log(sumCubes(3))
console.log(sumCubes(7))
