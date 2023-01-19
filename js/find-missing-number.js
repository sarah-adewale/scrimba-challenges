// The following function finds the “missing number” from an array of integers. That is, the array is expected to have all 
// integers from 0 up to the array’s length, but one is missing. As examples, the array, [5, 2, 4, 1, 0] is missing the number 3, 
// and the array, [9, 3, 2, 5, 6, 7, 1, 0, 4] is missing the number 8. 2
// Here’s an implementation that is O(N ) (the includes method alone is already O(N), since the computer needs to 
// search the entire array to find n):

function findMissingNumber(array) { 
    let sortedArr = array.sort((a, b) => (a < b) ? -1 : 1)
    for(let i = 0; i < sortedArr.length; i++) {
        if(array[i] !== i) { 
            return i;
        } 
    }
    // If all numbers are present:
    return null; 
}



console.log(findMissingNumber([9, 3, 2, 5, 6, 7, 1, 0, 4]))