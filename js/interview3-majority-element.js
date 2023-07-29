// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element 
// always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3

// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
 

// Follow-up: Could you solve the problem in linear time and in O(1) space?

var majorityElement = function(nums) {
    // initialize a cache obj
    // loop thru the array to add each number in the cache obj
    // return the highest occuring number
    let valArray = []
    let charArray = []
    let maxChar = 0
    let cache = {}
    for(const num of nums){
        if(!cache[num]){
            cache[num] = 1
        }else{
            cache[num]++
        }
    }
    // return cache

    valArray = Object.values(cache)
    charArray = Object.keys(cache)
    maxChar = Math.max(...valArray)

    return charArray[valArray.indexOf(maxChar)]
};

console.log(majorityElement([2,2,1,1,1,2,2]), 2)
console.log(majorityElement([3,2,3]), 3)