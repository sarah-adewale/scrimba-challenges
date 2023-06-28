function anagrams_of(string) {
    //base case; if the string only has one character
    //return an array containing just a single character string
  if (string.length === 1) {
    return [string[0]];
  }

  //create an array to hold all the anagrams
  let collection = [];
//   find all the anagrams of the substring from the second character until the end. for example
// if the string is 'abcd' the substring 'bcd' so we find all the abagrams of 'bcd'
  let substring_anagrams = anagrams_of(string.slice(1));

//   iterate over each substring
  substring_anagrams.forEach((substring_anagram) => {
    // iterate over each index of the substring from 0 until one index past the end of of the string
    for (let index = 0; index <= substring_anagram.length; index++) {
        // create a copy of the substring anagram
      let copy = substring_anagram.slice();
    //   insert the first character of our string into the substring anagram copy. where it goes will deoend on the index we're up to 
    // within this loop
      copy = copy.slice(0, index) + string[0] + copy.slice(index);
    // then take this new string and add it to our collection of anagrams
      collection.push(copy);
    }
  });
// return the entire anagram
  return collection;
}

const anagrams = anagrams_of("abcd");
console.log(anagrams);  // Output: ["abcd", "bacd", "bcad", "bcda", "acbd", "cabd", "cbad", "cbda", "acdb", "cadb", "cdab", "cdba", "abdc", "badc", "bdac", "bdca", "adbc", "dabc", "dbac", "dbca", "adcb", "dacb", "dcab", "dcba"]
