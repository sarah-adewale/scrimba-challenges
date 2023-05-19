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
  let result = []
  let cache = {}

  for(const num1 of num){
    let num2 = sum - num

    if(!cache[num2]){
      cache[num1] = true

    }
    result.push([num1, num2])
  }
}

console.log(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]])