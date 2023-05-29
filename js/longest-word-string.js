//Given a sentence, return the longest word in the string eg
// longestWord('Top Shelf Web Development Training on Stoch')

// function longestWord(str){
//     str = str.split(' ')
//     console.log(str)
//     let result = ''
//     let maxLength = 0

//     for(let i = 0; i < str.length; i++){
//         if(str[i].length > maxLength){
//             maxLength = str[i].length
//             result = str[i]
//         }
//     }
//     return result
// }

function longestWord(str){
    let newStr = str.split(' ')
    let result = newStr.reduce((maxLengthWord, currentWord) => {
        if(currentWord.length > maxLengthWord.length){
            return currentWord
        }else{
            return maxLengthWord
        }
    }, '')
    return result
}

console.log(longestWord('Top Shelf Web Development Training on Stoch'))