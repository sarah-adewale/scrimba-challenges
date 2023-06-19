// The next example is an algorithm that collects every combination of two-character strings built from an array of 
// single characters. For example, given the array: ["a", "b", "c", "d"], we’d return a new array containing the following 
// string combinations:
//  [
// 'ab', 'ac', 'ad', 'ba', 'bc', 'bd', 'ca', 'cb', 'cd', 'da', 'db', 'dc'
// ]

function wordBuilder(arr){
    //copy the array
    let newArr = arr.slice()
    let result = []
    //loop thru the array
    for(let i = 0; i < newArr.length; i++){
        for(let j = 0; j < newArr.length; j++){
            if(i !== j){
                result.push(newArr[i] + newArr[j])
            }
            
        }
    }
    return result
        //loop thru
        //concatenate each val in the first loop, to the value in the second loop


}

console.log(wordBuilder(['a', 'b', 'c', 'd']))