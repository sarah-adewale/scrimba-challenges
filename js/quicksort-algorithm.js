function quicksort(array, leftIndex, rightIndex) {
  // Base case: the subarray has 0 or 1 elements
  if (rightIndex - leftIndex <= 0) {
    return;
  }

  // Partition the range of elements and grab the index of the pivot
  let pivotIndex = partition(array, leftIndex, rightIndex);

  // Recursively call this quicksort method on the left side of the pivot
  quicksort(array, leftIndex, pivotIndex - 1);

  // Recursively call this quicksort method on the right side of the pivot
  quicksort(array, pivotIndex + 1, rightIndex);
}

