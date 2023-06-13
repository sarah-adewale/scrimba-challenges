// Write a function that returns the intersection of two arrays. The intersection is a third array that contains all values 
// contained within the first two arrays. For example, the intersection of [1, 2, 3, 4, 5] and [0, 2, 4, 6, 8] is [2, 4]. 
// Your function should have a complexity of O(N). (If your programming language has a built-in way of doing this, don’t use it. 
// The idea is to build the algorithm yourself.)

function intersectArr(arr1, arr2){
    // make sure that the length of the array is the same
    // if(arr1.length === arr2.length){

    // }
    let hashTable = {}
    let result = []
    //initialize a hashtable to store all the values in the first array
    //initialize an array to store my result
    for(const value of arr1){
        hashTable[value] = true
    }

    for(const value of arr2){
        if(hashTable[value]){
            result.push(value)
        }
    }
    return result
    //create a loop to push the keys to the hashtable
    //do a lookup to see if each value in the second array is in the hashtable
}

console.log(intersectArr([1, 2, 3, 4, 5], [0, 2, 4, 6, 8]))