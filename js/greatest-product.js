// Given an array of positive numbers, write a function that returns the greatest product of any three numbers. 
// The approach of using three nested loops would clock in at O(N3), which is very slow. Use sorting to implement the 
// function in a way that it computes at O(N log N) speed. (There are even faster implementations, but we’re focusing on using
// sorting as a technique to make code faster.)

function greatestProduct(arr){
    let sortedArr = arr.sort((a,b) => a < b ? -1 : 1)

    for(let i = 0; i < sortedArr.length - 1; i++){
        return arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 2]
    }
}

console.log(greatestProduct([3,2,4,7,8]))