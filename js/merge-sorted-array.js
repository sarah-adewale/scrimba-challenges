// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the 
// number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate 
// this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last 
// n elements are set to 0 and should be ignored. nums2 has a length of n.

 

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 

// Constraints:

// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[j] <= 109
 

// Follow up: Can you come up with an algorithm that runs in O(m + n) time?

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

// We define the function mergeSortedArrays that takes four parameters: nums1, m, nums2, and n. nums1 is the array that will 
// store the merged result, m is the number of elements in nums1 (excluding the zeros at the end), nums2 is the second sorted 
// array, and n is the number of elements in nums2.
// We initialize three variables: index1, index2, and mergedIndex.
// index1 represents the index of the last valid element in nums1. Since nums1 initially has m valid elements, its last 
// valid element's index is m - 1.
// index2 represents the index of the last valid element in nums2. Since nums2 has n elements, its last valid element's 
// index is n - 1.
// mergedIndex represents the current index where we will place the next element in the merged array. Since nums1 is 
// supposed to store the merged result, its last valid element's index will be m + n - 1.

  let index1 = m - 1; // Index for nums1
  let index2 = n - 1; // Index for nums2
  let mergedIndex = m + n - 1; // Index for the merged array

// The algorithm enters a while loop that continues as long as there are elements to merge from both nums1 and nums2. 
// The loop runs until index1 or index2 becomes less than 0, which means we have iterated through all the elements in 
// either of the arrays.
// Inside the loop, we compare the last elements of both arrays, i.e., nums1[index1] and nums2[index2]. Since both arrays 
// are sorted in non-decreasing order, the larger of these two elements should be placed at the mergedIndex position in nums1.
// If the element at nums1[index1] is greater than or equal to the element at nums2[index2], we place nums1[index1] at the 
// mergedIndex position, and then decrement index1 (to move to the next element in nums1).
// If the element at nums1[index1] is less than the element at nums2[index2], we place nums2[index2] at the mergedIndex position, 
// and then decrement index2 (to move to the next element in nums2).
// After placing an element in the merged array, we decrement mergedIndex to move towards the front of nums1 where the next 
// merged element should be placed.

  // Loop from the end and place elements in the correct position
  while (index1 >= 0 && index2 >= 0) {
    if (nums1[index1] >= nums2[index2]) {
      nums1[mergedIndex] = nums1[index1];
      index1--;
    } else {
      nums1[mergedIndex] = nums2[index2];
      index2--;
    }
    mergedIndex--;
  }


// After the while loop finishes, there may still be remaining elements in nums2 that were not yet merged into nums1. 
// This happens when all elements from nums1 have been merged, but nums2 still has elements left.
// To handle this situation, we use another while loop. In this loop, we insert the remaining elements from nums2 into nums1 
// starting from mergedIndex and moving backward. Since both arrays are already sorted, we can safely place the remaining 
// elements of nums2 directly in the correct positions in nums1.
// After placing each element from nums2, we decrement both index2 (to move to the next element in nums2) and 
// mergedIndex (to move towards the front of nums1 where the next merged element should be placed).
// After the mergeSortedArrays function is called with the appropriate arguments, the nums1 array will be updated with the 
// merged result, satisfying the requirements of the problem statement.

  // If there are remaining elements in nums2, insert them into nums1
  while (index2 >= 0) {
    nums1[mergedIndex] = nums2[index2];
    index2--;
    mergedIndex--;
  }

};

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

merge(nums1, m, nums2, n);

console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]


//input -- 
// num1 - array
// num2 - array
// m - number
// n - num

// output - array
// output lenght - m + n
