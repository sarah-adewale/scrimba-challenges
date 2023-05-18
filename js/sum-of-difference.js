// Your task is to sum the differences between consecutive pairs in the array in descending order.

// For example:

// [2, 1, 10] -> 9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 ( Nothing in Haskell ).

function sumOfDifference(arr){
    let sum = 0
    let sorted = arr.sort((a, b)=>b - a )
    console.log(sorted)
    for(let i = 0; i < sorted.length - 1; i++){
       sum += arr[i] - arr[i + 1]
    }
    return sum
}


console.log(sumOfDifference([2, 1, 10]), 9)
console.log(sumOfDifference([5, 6, 13, 5]), 8) // (13 - 6) + (6 - 5) + (5 - 5) 7 + 1 + 0 = 8
console.log(sumOfDifference([2, 1, 10, 1, 6, 7]))