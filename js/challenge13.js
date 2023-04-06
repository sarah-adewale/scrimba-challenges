// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// describe("Two Sum", () => {
//  it("Should implement two sum", () => {
//   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//  });
// });

// create a function with 2 parameters -- arr, sum
function twoSum(arr, sum){
    // initialize a new arr -- pairs
    let pairs = []
    // initialize a new hashmap -- cache
    let cache = {}
    // loop thru the arr, 
    for(let num of arr){
        // initialize a new varible -- num2
        let num2 = sum - num
        // if num2 is not in cache, add the arr and give it a value of 1
        if(!cache[num2]){
            cache[num] = 1
        }else{
            pairs.push([num, num2])
        }
    }
    return pairs

}





// if it is, push the arr and the new variable to the initialized pairs arr
// return pairs

console.log(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]])