
function doubleArray(arr, index = 0){ //index = 0 is the default function
    //initializing a base case if the index is greater than or equal to the length of the array
    if(index >= arr.length){
        return;
    }
    
    //multiply each value by 2
    arr[index] *= 2
    //recursively do this for all the values in the array
    doubleArray(arr, index + 1)
   
}

 arr = [1, 2, 3, 4]  //initialize the array
 doubleArray(arr, 0) //call the array
 console.log((arr)) //log the result to the console
