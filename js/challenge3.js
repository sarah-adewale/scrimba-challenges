/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str){
    const newStr = str
    let resultStr = ""
    for(let i = 0; i < newStr.length; i++){
        if(i % 2 === 0){
            resultStr += newStr[i].toUpperCase()
        }else{
            resultStr += newStr[i]
        }
    }
    return resultStr;
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));
console.log(altCaps("I'm so happy it's Monday"));