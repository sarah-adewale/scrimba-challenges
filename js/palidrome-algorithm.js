
function palindromeChecker(str){
    let leftIndex = 0
    let rightIndex = str.length-1

    for(let i = 0; i < str.length/2; i++){
        if(str[leftIndex] !== str[rightIndex]){
            return false
        }
        leftIndex++
        rightIndex--
    }
    return true
   
}

console.log(palindromeChecker('kayak'))
console.log(palindromeChecker('madam'))
console.log(palindromeChecker('kene'))