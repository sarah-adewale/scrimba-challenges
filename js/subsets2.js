// Let’s say we need to determine whether one array is a subset of another array. Take these two arrays, for example:
// The second array, ["b", "d", "f"] is a subset of the first array, ["a", "b", "c", "d", "e", "f"] because every value of the 
// second array is
//  ["a", "b", "c", "d", "e", "f"] ["b", "d", "f"]
// contained within the first array.

function subSet(arr1, arr2){

    let largeArr;
    let smallArr;
    let hashTable = {}

    if(arr1.length > arr2.length){
        largeArr = arr1
        smallArr = arr2
    }else{
        largeArr = arr2
        smallArr = arr1
    }

    for(const value of largeArr){
        //add all the values in the larger array to the hashtable
       hashTable[value] = true
    }

    for(const value of smallArr){
        if(!hashTable[value]){
            return false
        }
    }

    return true
}

console.log(subSet(["a", "b", "c", "d", "e", "f"], ["b", "d", "f"]))
console.log(subSet(["a", "b", "c", "d", "e", "f"], ["b", "d", "f", "h"]))