/*
Given a string of text, return true or false indicating whether or not the text is a palindrome

palindromeChecker(raceCar)// will return true 
*/

function palindromeChecker(text){
    text = text.toLowerCase()
    let textLen = text.length
    
    for(let i = 0; i < textLen; i++){
        if(text[i] !== text[textLen - 1 - i]){
            return false
        }
    }
    return true



}

console.log(palindromeChecker('raceCar'), true)
console.log(palindromeChecker('rat'), false)