/* toTitleCase
Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

/* 
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/

function capitalizeWord(word){
    // copy the data to another variable
    let newWord = word
    // slice() out the first letter, and then concatenate
    return newWord.slice(0, 1).toUpperCase() + newWord.slice(1)
   
}

/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/ 

function toTitleCase(str){
    // create an empty string
    str = str.split(' ')
    // create a loop
    
    let newStr = str.map(item => capitalizeWord(item))
    return newStr.join(' ')
    // use capitalizeWord function to capitalize the first letter in the sentence
    // append to new str
}

// Test your functions
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));