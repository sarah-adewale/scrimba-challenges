// A perfect power is a classification of positive integers:

// In mathematics, a perfect power is a positive integer that can be expressed as an 

// integer power of another positive integer. More formally, n is a perfect power if there exist natural numbers m > 1, 

// and k > 1 such that mk = n.

// Your task is to check wheter a given integer is a perfect power. If it is a perfect power, return a pair m and k 

// with mk = n as a proof. Otherwise return Nothing, Nil, null, NULL, None or your language's equivalent.

// Note: For a perfect power, there might be several pairs. For example 81 = 3^4 = 9^2, so (3,4) and (9,2) are valid 

// solutions. However, the tests take care of this, so if a number is a perfect power, return any pair that proves it.

// Examples
// Test.describe("perfect powers", function(){
//   Test.it("should work for some examples",function(){
//     Test.assertSimilar(isPP(4), [2,2], "4 = 2^2");
//     Test.assertSimilar(isPP(9), [3,2], "9 = 3^2");
//     Test.assertEquals( isPP(5), null, "5 isn't a perfect number");
//   });
// });

var isPP = function(n){
    for(let m = 2; m * m <= n; m++){
        // This line starts a for loop with an initial value of m set to 2. The loop will continue as 
        // long as m * m is less than or equal to n. This is an optimization because if m is 
        // greater than the square root of n, there's no need to continue searching.
        for(let k = 2; Math.pow(m,k) <= n; k++){
            // Within the outer loop, another for loop is started with an initial value of k set to 2. 
            // This inner loop will continue as long as m^k is less than or equal to n.
            if(Math.pow(m,k) === n){
                // Inside the inner loop, we calculate m^k using Math.pow(m, k) 
                // and check if it's equal to n. If it is, we've found a pair (m, k) such that m^k = n.
                return [m, k]
            }
        }
    }
  return null; 
}

console.log(isPP(4), [2,2])