// you're given an array of integers (both positive and negative). Find the contiguous sequence with the largest sum. Return the sum

function maxSubArraySum(arr){
    let actualArray = arr.slice()
    // initialize a varibale called maxAum and assign it the first value in the array
    let maxSum = actualArray[0]
    // initilaize another variable called current sum and assign it the first value in the array
    let currenSum = actualArray[0]
    // create a loop thru the  length of the actualArray
    for(let i = 1; i < actualArray.length; i++){
         // currentSum will be assigned the result of checking the maximum value between the actualArray[i] and the addition of currenSum
        // and the actualArray[i]
        currenSum = Math.max(actualArray[i], currenSum + actualArray[i])
         // if currentSum is greater than max sum, max sum becomes current sum
        if(currenSum > maxSum){
            maxSum = currenSum
        }
    }
       return maxSum
    // return maxSum
}

console.log(maxSubArraySum([2,3,-4,-5,6,7]))