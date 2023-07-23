// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate 
// the total cost of the mangoes.

// Examples
// mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
// mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
// mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free


// create a function called mango and give it two parameters quantity and price
// create a variable for free mangoes
// create a variable for paid mangoes

// to solve for paid mangoes
    // quantity divide by 3 multiplied by 2
// solve for free mangoes
    // quantity modulus 3

// calculate the total by adding the free mangoes and the paid mangoes and multiplying it by the price

function mango(quantity,  price){
    let paidMangoes = Math.floor(quantity / 3) * 2
    let freeMangoes = quantity % 3
    

    let totalMangoes = (paidMangoes + freeMangoes) * price

    return totalMangoes
}

function mango(quantity, price){
  return price * (quantity - Math.floor(quantity / 3));
}

// function mango(quantity, price_per_mango) {
//   // Calculate the number of mangoes you have to pay for (full price)
//   const paid_mangoes = Math.floor(quantity / 3) * 2;
  
//   // Calculate the number of free mangoes you receive
//   const free_mangoes = quantity % 3;
  
//   // Calculate the total cost
//   const total_cost = (paid_mangoes + free_mangoes) * price_per_mango;
  
//   return total_cost;
// }

// Test cases
console.log(mango(2, 3));  // Output: 6
console.log(mango(3, 3));  // Output: 6
console.log(mango(5, 3));  // Output: 12
console.log(mango(9, 5));  // Output: 30


console.log(mango(2,3), 6)
