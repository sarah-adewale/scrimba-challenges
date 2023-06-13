// Write a function that accepts a string that contains all the letters of the alphabet except one and returns the missing letter. 
// For example, the string, "the quick brown box jumps over a lazy dog" contains all the letters of the alphabet except the 
// letter, "f". The function should have a time complexity of O(N).


function missingLetter(string){

    //add the letters of the alphabet to an array
   
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    //create a hash to store the alphabet
    let hashTable = {}
    let result = ''
    //create a loop thru the string
    for(const letter of string){
        hashTable[letter] = true
    }

    for(const letter of alphabet){
        if(!hashTable[letter]){
            result = letter
        }
    }
    return result
}

console.log(missingLetter("the quick brown box jumps over a lazy dog" ))

//if the string is in the hash, return true. else return false
