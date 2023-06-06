// Assume we want to sort the array, [4, 2, 7, 1, 3]. It’s currently out of order, and we want to produce an array that contains 
// the same values in ascending order. how do we do this using bubble sort ?

//[4, 2, 7, 1, 3]

// first iteration - [2,4,7,1,3]
//[2,4,1,3,7]

//[2,1,3,4,7]
//[1,2,3,4,7]

//[1,2,3,4,7] - sorted

function bubbleSort(arr){
   //keeps track of the right most value in the array that has not yet been sorted
    let unsortedVal = arr.length - 1

    for(let i = 0; i <= unsortedVal; i++){
        //loop thru the array up to the right most value
        for(let j = 0; j <= unsortedVal - i - 1; j++){
            //create another loop up to the left value just before the right most value

            //compare the two values
            if(arr[j] > arr[j + 1]){
                //if the condition is true, swap
                //create a variable to hold the highest value
                const temp = arr[j];
                //the lowest value then gets swapped in the position of the highest value
                arr[j] = arr[j + 1];
                //the highest value's position is now in the postition that the lowest value was in 
                arr[j + 1] = temp;
                
            }
            
        }
    }
    //return the sorted array after all pass throughs 
    return arr
}



console.log(bubbleSort([4, 2, 7, 1, 3]))