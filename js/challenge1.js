/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
*/


// create a function with a sentence parameter (string)
function panic(sentence){
    // copy the data into a new variable
    const newSentence = sentence
    // coerce str to uppercase using the upperCase(),
    // use the split() to split the str , join() to add the emoji inbtw the sentence 
    return `${newSentence.toUpperCase().split(' ').join(' 😱 ')}!`
}

console.log(panic("I'm almost out of coffee")); 
console.log(panic("winter is coming"))
console.log(panic("hello"))