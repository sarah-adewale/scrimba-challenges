// code implementation of the partition

/*
pseudo
in the begining of a partition a pivot is first chosen
a complete partion is when all the values less than the pivot is on the left side of the pivot
and all the values greater than the pivot  is to the right of the pivot.

create a function and initialize it with an array
initialize the pivot as the last value in the array
initialize the left pointer as the first value in the array
initialize the right pointer as the right most value just before the pivot

create a loop thru the the length of the array
    if the value in the leftPointer is 
*/



// class SortableArray {
//   constructor(array) {
//     this.array = array;
//   }

//   partition(leftPointer, rightPointer) {
//     // We always choose the right-most element as the pivot.
//     // We keep the index of the pivot for later use:
//     let pivotIndex = rightPointer;
//     // We grab the pivot value itself:
//     let pivot = this.array[pivotIndex];
//     // We start the right pointer immediately to the left of the pivot
//     rightPointer--;

//     while (true) {
//       // Move the left pointer to the right as long as it
//       // points to a value that is less than the pivot:
//       while (this.array[leftPointer] < pivot) {
//         leftPointer++;
//       }
//       // Move the right pointer to the left as long as it
//       // points to a value that is greater than the pivot:
//       while (this.array[rightPointer] > pivot) {
//         rightPointer--;
//       }

//       // We've now reached the point where we've stopped
//       // moving both the left and right pointers.
//       // We check whether the left pointer has reached
//       // or gone beyond the right pointer. If it has,
//       // we break out of the loop so we can swap the pivot later
//       // on in our code:
//       if (leftPointer >= rightPointer) {
//         break;
//       } else {
//         // If the left pointer is still to the left of the right
//         // pointer, we swap the values of the left and right pointers:
//         [this.array[leftPointer], this.array[rightPointer]] = [
//           this.array[rightPointer],
//           this.array[leftPointer],
//         ];
//         // We move the left pointer over to the right, gearing up
//         // for the next round of left and right pointer movements:
//         leftPointer++;
//       }
//     }

//     // As the final step of the partition, we swap the value
//     // of the left pointer with the pivot:
//     [this.array[leftPointer], this.array[pivotIndex]] = [
//       this.array[pivotIndex],
//       this.array[leftPointer],
//     ];

//     // We return the left pointer for the sake of the quicksort method
//     // which will appear later:
//     return leftPointer;
//   }
// }

// // Create an instance of SortableArray
// const sortableArray = new SortableArray([1,2,4,5,6,3]);

// Test partition method
// const leftPointer = 0;
// const rightPointer = sortableArray.array.length - 1;
// const pivotIndex = sortableArray.partition(leftPointer, rightPointer);

// // Output the results
// console.log('Array after partitioning:');
// console.log(sortableArray.array);
// console.log('Pivot index:', pivotIndex);

function partition(array, leftPointer, rightPointer) {
  // We always choose the right-most element as the pivot.
  // We keep the index of the pivot for later use:
  let pivotIndex = rightPointer;
  // We grab the pivot value itself:
  let pivot = array[pivotIndex];
  // We start the right pointer immediately to the left of the pivot
  rightPointer--;

  while (true) {
    // Move the left pointer to the right as long as it
    // points to a value that is less than the pivot:
    while (array[leftPointer] < pivot) {
      leftPointer++;
    }
    // Move the right pointer to the left as long as it
    // points to a value that is greater than the pivot:
    while (array[rightPointer] > pivot) {
      rightPointer--;
    }

    // We've now reached the point where we've stopped
    // moving both the left and right pointers.
    // We check whether the left pointer has reached
    // or gone beyond the right pointer. If it has,
    // we break out of the loop so we can swap the pivot later
    // on in our code:
    if (leftPointer >= rightPointer) {
      break;
    } else {
      // If the left pointer is still to the left of the right
      // pointer, we swap the values of the left and right pointers:
      [array[leftPointer], array[rightPointer]] = [
        array[rightPointer],
        array[leftPointer],
      ];
      // We move the left pointer over to the right, gearing up
      // for the next round of left and right pointer movements:
      leftPointer++;
    }
  }

  // As the final step of the partition, we swap the value
  // of the left pointer with the pivot:
  [array[leftPointer], array[pivotIndex]] = [
    array[pivotIndex],
    array[leftPointer],
  ];

  // We return the left pointer for the sake of the quicksort method
  // which will appear later:
  return leftPointer;
}

function quicksort(array, leftIndex, rightIndex) {
  // Base case: the subarray has 0 or 1 elements
  if (rightIndex - leftIndex <= 0) {
    return array;
  }

  // Partition the range of elements and grab the index of the pivot
  let pivotIndex = partition(array, leftIndex, rightIndex);

  // Recursively call this quicksort function on the left side of the pivot
  array = quicksort(array, leftIndex, pivotIndex - 1);

  // Recursively call this quicksort function on the right side of the pivot
  array = quicksort(array, pivotIndex + 1, rightIndex);

  return array;
}

// Test case
const array = [5, 3, 8, 4, 2, 7, 1, 6];
const sortedArray = quicksort(array, 0, array.length - 1);

console.log('Original array:', array);
console.log('Sorted array:', sortedArray);