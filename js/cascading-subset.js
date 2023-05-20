// Create a method each_cons that accepts a list and a number n, and returns
//cascading subsets of the list of size n, like so:

// each_cons([1,2,3,4], 2)
// #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
// #=> [[1,2,3],[2,3,4]]
// As you can see, the lists are cascading; ie, they overlap, but never out of order.

function eachCons(arr, n){
    //initialize a result variable
    let result = []
    //create a loop up to the length of the array minus the n
    for(let i = 0; i <= arr.length - n; i++){
        //slice out each index and each index + the n value and push to result
        result.push(arr.slice(i, i + n))
    }
     //return the result
    return result
    
    
   
}

console.log(eachCons([1,2,3,4], 2), [[1,2], [2,3], [3,4]])
console.log(eachCons([1,2,3,4], 3), [[1,2, 3], [2,3, 4]])
console.log(eachCons([1,2,3,4,5,6], 4), [[1,2,3,4], [2,3,4,5], [3,4,5,6]])