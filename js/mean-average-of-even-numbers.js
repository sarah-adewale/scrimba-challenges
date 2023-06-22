// The following javascript method accepts an array of numbers and returns the mean average of all its even numbers. 
// How would we express its efficiency in terms of Big O?

function meanAverage(array){
    let newArray = array.slice()
    let meanCount = 0
    let sum = 0

    for(let i = 0; i <= newArray.length; i++){
        if(newArray[i] % 2 === 0){
            sum += newArray[i]
            meanCount += 1
        }
    }

    return sum/meanCount

}


console.log(meanAverage([1,2,4,6,7,8,10]))
console.log(meanAverage([12, 16, 18, 20]))
console.log(meanAverage([1,3,7,6,14,8,10]))