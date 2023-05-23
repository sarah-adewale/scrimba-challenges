//Given a string of text, find and return the most recurring character
//maxRecurringChar('aabacada) will return a



function maxRecurringChar(str){
    let charMap = {}
    let maxCharVal = 0
    let maxChar = ''
//first create a character map of the string of text to keep count of how much they apprear in the string
    //loop thru strings
    for(let char of str){
        if(charMap[char]){
            charMap[char]++
        }else{
            charMap[char] = 1
        }
    }
//then you iterate thru the map to get the maximum char
    // loop thru objects
    for(let char in charMap){
        if(charMap[char] > maxCharVal){
            maxCharVal = charMap[char]
            maxChar = char
        }
    }
    return maxChar

}

//An optimized approach
function maxRecurringChar(str){
    let charMap = {}
    let maxCharVal = 0
    let charArray = []
    let valuesArray = []
//first create a character map of the string of text to keep count of how much they apprear in the string
    //loop thru strings
    for(let char of str){
        if(charMap[char]){
            charMap[char]++
        }else{
            charMap[char] = 1
        }
    }

    //es6
    charArray = Object.keys(charMap)
    valuesArray = Object.values(charMap)
    maxCharVal = Math.max(...valuesArray)

    return charArray[valuesArray.indexOf(maxCharVal)]
}

console.log(maxRecurringChar('aabacada'))