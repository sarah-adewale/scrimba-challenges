// The goal of this exercise is to convert a string to a new string where each character in
//the new string is "(" if that character appears only once in the original string, or ")"
//if that character appears more than once in the original string. Ignore capitalization when determining
//if a character is a duplicate.

// Examples
// "din" => "((("
// "recede" => "()()()"
// "Success" => ")())())"
// "(( @" => "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It
//Should encode XXX", the "XXX" is the expected result, not the input!


function duplicateEcoding(str){
   let newString = str.split('')
    let cache = {}
    let result = ''

    for(const char of newString){
        if(!cache[char]){
            cache[char] = '('
            result += cache[char]
        }else{
            cache[char] = ')'
            result += cache[char]
        }
    }
    return result
}

console.log(duplicateEcoding('din'))
console.log(duplicateEcoding('success'))
console.log(duplicateEcoding('Success'))
console.log(duplicateEcoding('recede'))
