/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/

// create a function
function whisper(str){
    // copy the str in another variable
    let newStr = str
    // coerce str toLowerCase()
    // return `shh... ${newStr.split('!').join('').toLowerCase()}`
    return newStr.endsWith('!') ? "shh... " + newStr.slice(0, -1).toLowerCase() : "shh... " + newStr.toLowerCase()

}


// return the coerced str with shh at the beginning 

console.log(whisper("PLEASE! STOP! SHOUTING."));
console.log(whisper("MA'AM!, this is a Wendy's!"));
console.log(whisper("The KITTENS are SLEEPING!"));