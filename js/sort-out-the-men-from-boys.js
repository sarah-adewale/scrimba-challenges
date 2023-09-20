// Scenario
// Now that the competition gets tough it will Sort out the men from the boys .

// Men are the Even numbers and Boys are the odd!alt!alt
// Task
// Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the 

//boys!alt!alt

// Notes
// Return an array/list where Even numbers come first then odds

// Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .

// Array/list size is at least 4 .

// Array/list numbers could be a mixture of positives , negatives .

// Have no fear , It is guaranteed that no Zeroes will exists .!alt
// Repetition of numbers in the array/list could occur , So (duplications are not included when separating).

// Input >> Output Examples:
// menFromBoys ({7, 3 , 14 , 17}) ==> return ({14, 17, 7, 3}) 
// Explanation:
// Since , { 14 } is the even number here , So it came first , then the odds in descending order {17 , 7 , 3} .

// menFromBoys ({-94, -99 , -100 , -99 , -96 , -99 }) ==> return ({-100 , -96 , -94 , -99})
// Explanation:
// Since , { -100, -96 , -94 } is the even numbers here , So it came first in *ascending order *, then the odds in 

// descending order { -99 }

// Since , (Duplications are not included when separating) , then you can see only one (-99) was appeared in the final 

// array/list .

// menFromBoys ({49 , 818 , -282 , 900 , 928 , 281 , -282 , -1 }) ==> return ({-282 , 818 , 900 , 928 , 281 , 49 , -1})
// Explanation:
// Since , {-282 , 818 , 900 , 928 } is the even numbers here , So it came first in ascending order , then the odds 

// in descending order { 281 , 49 , -1 }

// Since , (Duplications are not included when separating) , then you can see only one (-282) was appeared in the 
// final array/list .

function menFromBoys(arr){
  //your code here
  let oddNumbers = []
  let evenNumbers = []

    let cache= {}
    let newArr = []
    for(const num of arr){
        if(!cache[num]){
            cache[num] = true
            newArr.push(num)
        }
    }
    // console.log(newArr)

  newArr.map((num) => {
    if(num % 2 === 0){
        evenNumbers.push(num)
    }else{
        oddNumbers.push(num)
    }
  })

  let sortedOddNumbers = oddNumbers.sort((a, b) => a > b ? -1 : 1)
   let sortedevenNumbers = evenNumbers.sort((a, b) => b > a ? -1 : 1)

return sortedevenNumbers.concat(sortedOddNumbers)
}

console.log(menFromBoys([7, 3 , 14 , 17]), [14,17,7,3])
console.log(menFromBoys([-94, -99 , -100 , -99 , -96 , -99]), [-100,-96,-94,-99])
console.log(menFromBoys([2,43,95,90,37]), [2,90,95,43,37])