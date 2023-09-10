// The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word 
// and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

// Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an 
// abbreviation, following these rules:

// A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or 
// hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
// The abbreviated version of the word should have the first letter, then the number of removed characters, then the last 
// letter (eg. "elephant ride" => "e6t r2e").
// Example
// abbreviate("elephant-rides are really fun!")
//          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// words (^):   "elephant" "rides" "are" "really" "fun" => 
//                123456     123     1     1234     1
// ignore short words:               X              X

// abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// all non-word characters (*) remain in place
//                     "-"      " "    " "     " "     "!"
// === "e6t-r3s are r4y fun!"

// split the string at the dashes
// if the number of filtered characters is less than or equal to 1 ignore
// non-word characters should remain in place


function abbreviate(s) {
  function isAlpha(char) {
    return /[a-zA-Z]/.test(char);
  }

  function abbreviateWord(word) {
    if (word.length <= 3) {
      return word;
    }
    return word[0] + (word.length - 2) + word[word.length - 1];
  }

  let result = "";
  let currentWord = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (isAlpha(char)) {
      currentWord += char;
    } else {
      result += abbreviateWord(currentWord);
      currentWord = "";
      result += char;
    }
  }

  // Handle the last word if it exists
  result += abbreviateWord(currentWord);

  return result;
}

// Test the function
const inputStr = "elephant-rides are really fun!";
const outputStr = abbreviate(inputStr);
// console.log(outputStr);  // Output: "e6t-r3s are r4y fun!"



console.log(abbreviate('elephant-rides are really fun!'), 'e6t-r3s are r4y fun!')
// console.log(abbreviate('e6t-r3s are r4y fun!'))

