// Use Big O Notation to describe the time complexity of the following function. 
// This function finds the greatest product of three numbers from a given array:


function largestProduct(arr){
    let largestProductSoFar = arr[0] * arr[1] * arr[2]

    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            for(let k = j + 1; k < arr.length; k++){
                if(arr[i] * arr[j] * arr[k] > largestProductSoFar){
                    return largestProductSoFar = arr[i] * arr[j] * arr[k]
                }
            }
        }
    }
}

console.log(largestProduct([2,3,4,5]))