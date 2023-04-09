/* Chef Mario's Recipe Book 
Chef Mario was in the middle of writing his cookbook masterpiece
when he spilled coffee on his keyboard! Now all his recipes have repeat
ingredients.

Help save Chef Mario's cookbook by writing a function that takes in an array 
and returns a new array with all the duplicates removed. 

Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];
*/ 

const eggScrambleRecipe = [
            "🥓 bacon",
            "🥓 bacon", 
            "🍳 eggs",
            "🫑 green peppers",
            "🧀 cheese",
            "🌶️ hot sauce",
            "🥓 bacon",
            "🥦 broccoli", 
            "🧀 cheese",
            "🥦 broccoli", 
            "🌶️ hot sauce"
        ]

function removeDupesFromArray(arr){
//     // initialize an empty array
//     let receipes = []
//     // loop thru the input array
//     for(let i = 0; i < arr.length; i++){
//          // if each input is not present in the initialized array
//         if(!receipes.includes(arr[i])){
//             // add input
//             receipes.push(arr[i])
//         }
        
//     }
//    return receipes
//     // return initialized array

    // initialize an empty array
    let receipes = []
    let breadcrumbs = {}
    // loop thru the input array
    for(let i = 0; i < arr.length; i++){
         // if each input is not present in the initialized array
        if(!breadcrumbs[arr[i]]){
            // add input
            breadcrumbs[arr[i]] = true
            receipes.push(arr[i])
            // return true
        }
        
    }
   return receipes
    // return initialized array
}

console.log(removeDupesFromArray(eggScrambleRecipe));
console.log(removeDupesFromArray(["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"]));