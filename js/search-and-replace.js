//receiving a sentence, a word in a sentence and a replacement for that word as arguments, perform a search and replace on the sentence
// using the arguments provided and return the new sentence

//eg searchReplace("He is Sleeping on the couch", "sleeping", "sitting")
//should return "He is Sitting on the couch"

function searchReplace(sentence, word, replacement){
    //if the first word in the sentence is uppercase and the first word in the word to be replaced is also in uppercase
    //the convert the replacement word to capitalized word
    if(word[0] === word[0].toUpperCase()){
        replacement = replacement[0].toUpperCase() + replacement.slice(1) 
    }
    return sentence.replace(word, replacement) //then replace word with replacement. 
}

console.log(searchReplace("He is Sleeping on the couch", "sleeping", "sitting"))