
function binarySearch(array, searchValue) {
  let lowerBound = 0;
  let upperBound = array.length - 1;

  while (lowerBound <= upperBound) {
    let midpoint = Math.floor((upperBound + lowerBound) / 2);
    let valueAtMidpoint = array[midpoint];

    if (searchValue === valueAtMidpoint) {
      return midpoint;
    } else if (searchValue < valueAtMidpoint) {
      upperBound = midpoint - 1;
    } else if (searchValue > valueAtMidpoint) {
      lowerBound = midpoint + 1;
    }
  }

  return null;
}


console.log(binarySearch([2,3,5,6,7,8], 7))