/*
given a string of text containing 0 or more vowels, count the number of vowels that can be found within the text. For example

vowelsCounter('anehizxcv') will return 3
*/

//in this approach, we loop thru each letter of the string to see if it matches any english vowels
//before looping, initialize a variable to hold the count, give it a value of zero
//when the match is found, increment. then return the result

function vowelsCounter(string){
    string = string.toLowerCase()
    let result = 0
    let vowels = ['a', 'e', 'i', 'o', 'u']
    for(let i = 0; i < string.length; i++){
        if(vowels.includes(string[i])){
            result++
        }
    }
    return result
}

//using regular expressions

function vowelsCounter(string){
    //search text with regex
    let matchingInstances = string.match(/[aeiou]/gi) //.match() returns an array of the matches found after comparing the regualar expression
    //passed in as an argument with the text
    if(matchingInstances){
        return matchingInstances.length
    }else{
        return 0
    }
}

console.log(vowelsCounter('anehizxcv'))