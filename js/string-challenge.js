// given a sentence containing two or more words, return the equivalent of the sentence when capitalized
// capSentence('the tales of scotch!') would return 'The Tales Of Scotch!'

//the foreach approach

function capSentence(str){
    // corerce the string to lowercase and split
    let wordsArray = str.toLowerCase().split(' ')
    let result = []
    console.log(wordsArray)
    wordsArray.forEach(item => {
       result.push(item[0].toUpperCase() + item.slice(1))
    })
    return result.join(' ')
}

//the map method
function capSentence(str){
    let wordsArray = str.toLowerCase().split(' ')
    // let result = []
    let result = wordsArray.map(item => {
       return item[0].toUpperCase() + item.slice(1)
    })
    return result.join(' ')
}

function capSentence(str){
    let wordsArray = str.toLowerCase().split(' ')
    // let result = []
    let result = wordsArray.map(item => {
       return item.replace(item[0], item[0].toUpperCase())
    })
    return result.join(' ')
}

console.log(capSentence('the tales of scotch!'))