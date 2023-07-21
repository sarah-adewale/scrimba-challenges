// Write three different implementations of a function that finds the greatest number 
// within an array. Write one function that is O(N^2), 
// one that is O(N log N), and one that is O(N). 

// input - array
// output - number

// create a function with an input array
// initialize the greatestNumber and give it a value of 0

// create a loop thru the length of the array
// create another loop thru the length of the same array
// if the each value in the first loop is greater than the value in the second loop
// return true
// else return false

// function greatestNum(array){
//     for(let i = 0; i < array.length; i++){
//         let maxVal = true
//         for(let j = i + 1; j < array.length; j++){
//             if(array[i] < array[j]){
//                 maxVal = false
//             }
//         }
//         if(maxVal){
//             return array[i]
//         }
//     }
// }


// function greatestNum(array){
//     let currentMaxVal = 0

//     for(let i = 0; i < array.length; i++){
//         if(array[i] > currentMaxVal){
//             currentMaxVal = array[i]
//         }
//     }
//     return currentMaxVal
// }

function greatestNum(array){
    let sorted = array.sort((a, b) => a < b ? -1 : 1)
    return sorted[array.length - 1]
}

console.log(greatestNum([2,3,5,7,4,8,1]), 8)




