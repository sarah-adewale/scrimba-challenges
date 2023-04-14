/* 
How often do the letters in your name repeat? 

Write a function that counts how many times each letter of your name
occurs. Your function should take in your first and last name and return
an object where the keys are each character in your name, and the value
is how many times that character appears in your name. 

Example input: "Peggy Porth"
Example output: {p: 2, e: 1, g: 2, y: 1, o: 1, r: 1, t: 1, h: 1}

Your function should NOT count spaces and should not be case sensitive (a
lowercase t and a capital T should be considered the same character).

*/ 

function countChars(str){
    // convert to lowerCase() and remove space using split and join
    let  newStr = str.toLowerCase().split(' ').join("")
    // create empty object to hold the string and value
    let cache = {}
    // loop thru the string,  
    for(let char of newStr){
        // if the char isnt present in the cache object, add it and give it a value of 1 
        if(!cache[char]){
            cache[char] = 1
        }else{
            // if it is, increment the value of the char
            cache[char]++
        }
    }
// console.log(cache)
// return object
return cache   
}

console.log(countChars("Peggy Porth"));