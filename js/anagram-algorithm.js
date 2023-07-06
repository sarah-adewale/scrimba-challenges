// a word is said to be an anagram of another word when it can be formed by rearranging the letters of the other word 
// using each letter just once. eg. listen is an anagram of silent

// pseudo

// create a function anagram and pass it two parameters(stringa and stringb)
function anagram(strA, strB){
    function charMap(text){
        // create another function in the anagram function to use to create a map of stringa and stringb give it a parameter of text
        //in the function initialize a character map
        let cache = {}
         // create a loop thru each char of the text parameter
        for(let char of text){
            // if each char is in the map, add 1 to it, else add the character and give it a value of 1
            if(cache[char]){
                cache[char]++
            }else{
                cache[char] = 1
            }
        }
        // return the character map
        return cache
    }
    // create a comparison to check for the length of string a and b
    if(strA.length === strB.length){
        // if true, loop thru string a 
        // create a stingamap variable hold the map of string a
        let strAmap = charMap(strA)
        // create a stringbmap variable to home the map of string b
        let strBmap = charMap(strB)
        // create a loop for each char of stringa
        for(let char in strAmap){
             // compare each char in stringa to each character in stringb, if they are not equal, return false
            
            if(strAmap[char] !== strBmap[char]){
                return false
            }
            // if they are, return true
            return true
        }
    // else return false
    }else{
        return false
    }
    
}

console.log(anagram('listen', 'silent'))
