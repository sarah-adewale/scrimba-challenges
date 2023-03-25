// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false


function validatePIN(pin) {
  const pinLength = pin.length;
  
  // Check if the PIN length is either 4 or 6
  if (pinLength === 4 || pinLength === 6) {
    // Check if all characters in the PIN are digits
    for (let i = 0; i < pinLength; i++) {
      if (!isDigit(pin.charAt(i))) {
        return false;
      }
    }
    return true;
  }
  
  return false;
}

function isDigit(char) {
  return char >= "0" && char <= "9";
}

console.log(validatePIN("1234")); // true
console.log(validatePIN("12345")); // false
console.log(validatePIN("a234")); // false


console.log(validatePIN('12345'), false)
console.log(validatePIN('1234'), true)
console.log(validatePIN('123456'), true)