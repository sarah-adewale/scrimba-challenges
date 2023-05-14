// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. 
// ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters 
// included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, 
// like in the original Rot13 "implementation".



// function rot13(message) {
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   const cipher = 'nopqrstuvwxyzabcdefghijklm';
//   const map = new Map();
  
//   // Create a mapping of each letter to its ROT13 counterpart
//   for (let i = 0; i < alphabet.length; i++) {
//     map.set(alphabet[i], cipher[i]);
//     map.set(alphabet[i].toUpperCase(), cipher[i].toUpperCase());
//   }
  
//   let result = "";
  
//   // Iterate over each character in the message
//   for (let i = 0; i < message.length; i++) {
//     let char = message[i];
    
//     // Check if the character is in the map
//     if (map.has(char)) {
//       // Replace the character with its ROT13 counterpart
//       char = map.get(char);
//     }
    
//     result += char;
//   }
  
//   return result;
// }

function rot13(message){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const cipher = 'nopqrstuvwxyzabcdefghijklm';
    const map = new Map()

    for(let i = 0; i < alphabet.length; i++){
        map.set(alphabet[i], cipher[i])
        map.set(alphabet[i].toLowerCase(), cipher[i].toLowerCase())
    }
    let result = ''
    for(let char of message){
        if(map.has(char)){
            char = map.get(char)
        }
        result += char
    }
    return result
}

console.log(rot13('word'), 'jbeg,')