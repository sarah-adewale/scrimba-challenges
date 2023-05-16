// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

// function incrementString (strng) {
//   // return incrementedString
//   //input is a string
//   //return a new string
  
//   let result = ''
  
//     //initialize a newString
//   //if the string has no number, append the number 1 to it
//   if(isNaN(parseInt(strng))){
//         result = `${strng}1`
//   }  
//   let newString = strng.split('')
//   newString.filter((item) => isNaN(parseInt(item)))
//   return newString


// }

// function getLastNumbers(string){
//     let lastNumbers = ''
//     let letters = ''
      

//     // let i = string.length - 1
//     // while(i >= 0 && !isNaN(parseInt(string[i]))){
//     //     lastNumbers = string[i] + lastNumbers
//     //     i--
     
//     // }
//     // if(!isNaN(parseInt(string))){
//     //     return string + 1
//     // }

//     for(let i = 0; i < string.length; i++){
//         if(!isNaN(parseInt(string[i]))){
//             break;
//         }
//         letters += string[i]
//     }

//     for(let i = string.length - 1; i >= 0; i--){
//         if(!isNaN(parseInt(string[i]))){
//             lastNumbers = string[i] + lastNumbers
//         }
//     }
//     return `${letters}${parseInt(lastNumbers) + 1}`
   
// } 
 
function incrementString(string){
    let number = ''
    let prefix = string
    let i = string.length - 1; 
    while( i >= 0 && !isNaN(parseInt(string[i])) ){
        number = string[i] + number
        i--
    }
        if(number !== ''){
            const numDigits = number.length
            const leadingZeros = number.match(/^0+/)
            if(leadingZeros){
                const num = (parseInt(number) + 1).toString().padStart(numDigits, 0)
                prefix = string.slice(0, i + 1)
                number = num
            }else{
                const num = parseInt(number) + 1
                prefix = string.slice(0, i + 1)
                number = num.toString()
            }

        }else{
            number = '1'
        }
        return prefix + number
    }
    
    



console.log(incrementString('foo'), 'foo1')
console.log(incrementString('foobar23'), 'foobar24')
console.log(incrementString('foo0042'), 'foo0043')
console.log(incrementString('foo9'), 'foo10')
console.log(incrementString('foo099'), 'foo100')
console.log(incrementString('foo00999'), 'foo01000')
console.log(incrementString('fo99obar99'), 'fo99obar100')



