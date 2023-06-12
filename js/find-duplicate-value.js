// Write a function that accepts an array of strings and returns the first duplicate value it finds. For example, 
// if the array is ["a", "b", "c", "d", "c", "e", "f"], the function should return "c", since it’s duplicated within the array. 
// (You can assume that there’s one pair of duplicates within the array.) Make sure the function has an efficiency of O(N).

function firstDuplicate(arr){
    //create a hashtable to store the values in the array
    let hashTable = {}
    //initialize a result variable to handle resultant string
    let result = ''
    //create a loop to add the values in the arrays to the hashTable and give it a key of true
    for(const value of arr){
        if(!hashTable[value]){
            hashTable[value] = true
        }else{
            result = value
        }
    }

    return result
        //do a lookup to check if key is in the hashtable
}

console.log(firstDuplicate(["a", "b", "a", "a", "c", "e", "f"]))
