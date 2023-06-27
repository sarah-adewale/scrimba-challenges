//the following function prints every number from a low number to a high number. for example, if low is 0 and high is 10

function printEveryOther(high, low){
    //base case
    if(low > high){
        low
    }

    printEveryOther(low += 2, high)
}

printEveryOther(10, 0)
// console.log(printEveryOther(10, 0))

// here is an array containing both numbers as well as other arrays, which in turn contain numbers and arrays:

// array = [ 1, 2,
// 3,
// [4, 5, 6], 7,
// [8,
// [9, 10, 11, [12, 13, 14]
// Write a recursive function that prints all the numbers (and just numbers).

// function printItems(arr){
//     arr.forEach(element => {
//         if(Array.isArray(element)){
//             printItems(element)
//         }else{
//              element
//         }
//     });
// }

// printItems([ 1, 2,
// 3,
// [4, 5, 6], 7,
// [8,
// [9, 10, 11, [12, 13, 14]
// ] ],
// [15, 16, 17, 18, 19, [20, 21, 22,
// [23, 24, 25, [26, 27, 29]
// ], 30, 31 ], 32
// ], 33 ])
// console.log(printItems([ 1, 2,
// 3,
// [4, 5, 6], 7,
// [8,
// [9, 10, 11, [12, 13, 14]
// ] ],
// [15, 16, 17, 18, 19, [20, 21, 22,
// [23, 24, 25, [26, 27, 29]
// ], 30, 31 ], 32
// ], 33 ]))


 function countdown(number) { 
    if(number === 1){
        return 1
    }
    console.log(number);
    countdown(number - 1); 
}

countdown(10)