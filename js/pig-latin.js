// “Pig Latin is a constructed language game in which words in English are altered, usually by adding a fabricated suffix or 
// by moving the initial consonant or consonant cluster of a word to the end of the word and adding a vocalic syllable to create 
// such a suffix. For example, Wikipedia would become ikipediaway (taking the 'W' and 'ay' to create a suffix). The objective 
// is to conceal the words from others not familiar with the rules.” - Wikipedia

// explanation
// Translate the provided string to Pig Latin by following the rules below:

// For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the end of the word 
// sequence and "ay" affixed. E.g
// "pig" = "igpay"
// For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed. E.g
// "glove" = "oveglay"
// For words that begin with vowel sounds, simply add "way" to the end of the word. E.g
// "explain" = "explainway”

function pigLatin(str){
    // convert string to same case
    // create a vowel array
    // create a loop thru the characters of the string
        //compare it with the characters in the vowel array, if the character is a vowels
        //pop out the first character, add it to the end of the array and then affix 'ay'
    // create a vowelIndex variable to store the index of the vowel
    str = str.toLowerCase()
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let result = ''
    let vowelIndex = 0
    
        if(vowels.includes(str[0])){
            result += str + 'way'
        }else{
            for(const char of str){
                if(vowels.includes(char)){
                    vowelIndex = str.indexOf(char)
                    result += str.slice(vowelIndex) + str.slice(0, vowelIndex) + 'ay'
                    break;
                }
            }
        }
 
    return result
    
}


console.log(pigLatin('pig'))
console.log(pigLatin('gLove'))
console.log(pigLatin('explain'))