// Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the 
// sleigh and a secret password. If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" (yes, even Santa has 
// a secret password with uppercase and lowercase letters and special characters :D), the return value must be true. Otherwise it 
// should return false.

// Examples:

// var sleigh = new Sleigh();
// sleigh.authenticate("Santa Claus", "Ho Ho Ho!"); // must return TRUE

// sleigh.authenticate("Santa", "Ho Ho Ho!"); // must return FALSE
// sleigh.authenticate("Santa Claus", "Ho Ho!"); // must return FALSE
// sleigh.authenticate("jhoffner", "CodeWars"); // Nope, even Jake is not allowed to use the sleigh ;)


function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  return name === 'Santa Claus' && password === 'Ho Ho Ho!' 
}

console.log(Sleigh('Santa Claus', 'Ho Ho Ho!'), true)
console.log(Sleigh('Santa Clause', 'Ho Ho Ho!'), false)