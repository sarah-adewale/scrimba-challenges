class SortableArray {
  constructor(array) {
    this.array = array;
  }

  partition(leftPointer, rightPointer) {
    // We always choose the right-most element as the pivot.
    // We keep the index of the pivot for later use:
    let pivotIndex = rightPointer;
    // We grab the pivot value itself:
    let pivot = this.array[pivotIndex];
    // We start the right pointer immediately to the left of the pivot
    rightPointer--;

    while (true) {
      // Move the left pointer to the right as long as it
      // points to a value that is less than the pivot:
      while (this.array[leftPointer] < pivot) {
        leftPointer++;
      }
      // Move the right pointer to the left as long as it
      // points to a value that is greater than the pivot:
      while (this.array[rightPointer] > pivot) {
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
      }
      // If the left pointer is still to the left of the right
      // pointer, we swap the values of the left and right pointers:
      else {
        [this.array[leftPointer], this.array[rightPointer]] = [
          this.array[rightPointer],
          this.array[leftPointer],
        ];
        // We move the left pointer over to the right, gearing up
        // for the next round of left and right pointer movements:
        leftPointer++;
      }
    }
        // As the final step of the partition, we swap the value
            // of the left pointer with the pivot:
        [this.array[leftPointer], this.array[pivotIndex]] = [
        this.array[pivotIndex],
        this.array[leftPointer],
        ];

        // We return the left pointer for the sake of the quicksort method
        // which will appear later:
        return leftPointer;
    }
}
