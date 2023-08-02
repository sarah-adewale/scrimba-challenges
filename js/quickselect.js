

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



function quickselect(array, kth_lowest_value, left_index, right_index) {
  if (right_index - left_index <= 0) {
    return array[left_index];
  }

  const pivot_index = partition(array, left_index, right_index);

  if (kth_lowest_value < pivot_index) {
    return quickselect(array, kth_lowest_value, left_index, pivot_index - 1);
  } else if (kth_lowest_value > pivot_index) {
    return quickselect(array, kth_lowest_value, pivot_index + 1, right_index);
  } else { // if kth_lowest_value === pivot_index
    // If, after the partition, the pivot position is in the same spot
    // as the kth lowest value, we've found the value we're looking for
    return array[pivot_index];
  }
}



// Example usage:
const array = [3, 1, 6, 8, 2, 7, 4, 5];
const kth_lowest_value = 2;
const left_index = 0;
const right_index = array.length - 1;

const result = quickselect(array, kth_lowest_value, left_index, right_index);
console.log(result); // Output: The kth lowest value in the array
