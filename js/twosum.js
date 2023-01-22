// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// function twoSum(arr, sum){
//   const pairs = [[2, 2], [3, 1]]
//   const nums = {'1': '1', '2': '1', '1': '1', '0': '1'}

//   for(const num1 of arr){
//     // 4 - 1 = 3
//     // 4 - 2 = 2
//     // 4 - 2 = 2
//     // 4 - 3 = 1
//     // 4 - 4 = 0
//     const num2 = sum - num1
//     // if num2 isnt present in the obj
//     if(!nums[num2]){ 
//         // add each value as property and assign 1 to it
//       nums[num1] = 1
//       console.log(nums)
//     }else{
//         // if its present add each arr and num2 into the initialized array
//       pairs.push([num1,num2])
//     }
//   }
//   return pairs
// }

function twoSum(num, sum){

  let returnedArray = []
  
  for(let i = 0; i <= num.length; i++){
    for(let j = 0; j <= num.length; j++){
      if(num[i] + num[j] === sum){
        returnedArray.push([num[j],num[i]])
      }
    }
  }

  let cache = {}
  let result = []
  for(const char of returnedArray){
    if(!cache[char]){
      cache[char] = 1
      result.push(char)
    }
  }


  return result
}

console.log(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]])