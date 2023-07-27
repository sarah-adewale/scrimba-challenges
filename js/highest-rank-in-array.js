// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for 
// most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

// input -- array
// return - number



function highestRank(array){
    let cache = {}


    for(const value of array){
        if(!cache[value]){
            cache[value] = 1
        }else{
            cache[value]++
        }
    }
   

      // Initialize variables to store the most frequent number and its frequency
    let mostFrequentNumber;
    let maxFrequency = 0;
    
    // Loop through the frequency object to find the most frequent number and its frequency
    // cache[num] is the value
    for (const num in cache) {
        if (cache[num] > maxFrequency || (cache[num] === maxFrequency && num > mostFrequentNumber)) {
        mostFrequentNumber = num;
        maxFrequency = cache[num];
        }
    }
  
  // Convert the most frequent number back to a number (since it is stored as a string in the object keys)
  return Number(mostFrequentNumber);

}


console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]), 12)
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]), 12)
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]), 3)
