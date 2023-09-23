// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner 
// kata, you can assume that the input data is always a non empty string, no need to verify it.

// Examples
// "Hi!"     ---> "Hi!"
// "Hi!!!"   ---> "Hi!"
// "!Hi"     ---> "Hi!"
// "!Hi!"    ---> "Hi!"
// "Hi! Hi!" ---> "Hi Hi!"
// "Hi"      ---> "Hi!"

function remove(string) {
  //coding and coding....
  string = string.split('!').join('')
  return string + '!';  
}


console.log(remove("Hi!"), "Hi!")
console.log(remove("Hi!!!"), "Hi!")
console.log(remove("!Hi"), "Hi!")
console.log(remove("Hi! Hi!"), "Hi Hi!")
console.log(remove("Hi"), "Hi!")