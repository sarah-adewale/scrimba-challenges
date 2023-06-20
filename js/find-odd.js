// given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

//array
// return the value that appears odd times


function findOdd(arr){
    let hash = {}
    // let objValues = []
    // let propsArray = []
    let newArr = arr.slice()
   let result = 0
   

    for(const char of newArr){
        if(!hash[char]){
            hash[char] = 1
          
        }else{
            hash[char]++
        }
    }

    for(const num in hash){
        if(hash[num] % 2 !== 0){
            result = num
        }
    }
    
    return result
    // console.log(propsArray)
    // return propsArray[objValues(result)]
    // return result
}

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]), 4)
console.log(findOdd([0,1,0,1,0, 0, 0]), 0)
console.log(findOdd([7]), 7)
console.log(findOdd([1,1,2]), 2)
console.log(findOdd([0]), 0)