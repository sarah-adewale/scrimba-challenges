// Write a function that returns the first non-duplicated character in a string. For example, the string, "minimum" 
// has two characters that only exist once—the "n" and the "u", so your function should return the "n", since it occurs first. 
// The function should have an efficiency of O(N).

function nonDuplicate(string){

    let hashTable = {}
    let result = ''
    for(const value of string){
      if(!hashTable[value]){
        hashTable[value] = 1
      }else{
        hashTable[value]++
      }
    }

    for(const value of string){
        if(hashTable[value] === 1){
            result += value
        }
    }
    return result[0]


}

console.log(nonDuplicate('minimum'))
