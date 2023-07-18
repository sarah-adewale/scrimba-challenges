
// This implementation uses nested loops and is O(N2)
function maxArray(){
    for(let i = 0; i < array.length; i++) {
        iIsGreatestNumber = true;
        for(let j = 0; j < array.length; j++) { 
            if(array[j] > array[i]) {
                iIsGreatestNumber = false; 
            }
        }
        if(iIsGreatestNumber) { 
            return array[i];
        }
    }
}

// This implementation simply sorts the array and returns the last number. The sorting is O(N log N):
 function max(array) {
    array.sort((a, b) => (a < b) ? -1 : 1);
    return array[array.length - 1]; 
}


// This implementation is O(N) as we loop once through the array:
function max(array) {
    let greatestNumberSoFar = array[0];
    for(let i = 0; i < array.length; i++) { 
        if(array[i] > greatestNumberSoFar) {
            greatestNumberSoFar = array[i]; 
        }
    }
    return greatestNumberSoFar; 
}