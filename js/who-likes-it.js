// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. 
// We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display 
// text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.


//input - array
//output - string
//create a function
// create a variable in the function 
// create a conditional to check if there are values in the array
// return the resulting string
// create a loop thru the length of the array
// if the array

function like(arr){
    let remainingValues = arr.slice(2)
    remainingValues = remainingValues.length
    if(arr.length === 0) return 'no one likes this'
    if(arr.length === 1) return `${arr[0]} likes this`
    if(arr.length === 2) return `${arr[0]} and ${arr[1]} like this`
    if(arr.length === 3) return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`
    if(arr.length > 3) return `${arr[0]}, ${arr[1]} and ${remainingValues} others like this`
}

console.log(like([]))
console.log(like(["Peter"]))
console.log(like(["Jacob", "Alex"]))
console.log(like(["Max", "John", "Mark"]))
console.log(like(["Alex", "Jacob", "Mark", "Max"]))
console.log(like(["Alex", "Jacob", "Mark", "Max", "Sarah"]))