// create a function that takes a small sample of an array. We expect to have very large arrays, 
// so our sample is just the first, middlemost, and last value from the array.

function arraySample(array){
    let newArray = array.slice()
    let first = newArray[0]
    let middle = Math.floor(newArray.length/2)
    let last = newArray[newArray.length - 1]
    return [first, newArray[middle], last]
}

console.log(arraySample([2,3,4,6,7]))