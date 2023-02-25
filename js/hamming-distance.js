/*
Given two strings of equal length, calculate and return the hamming distance between them eg

hammingDistance('river', 'rover')
*/

function hammingDistance(str1, str2){
    [str1, str2] = [str1.toLowerCase(), str2.toLowerCase()]
    if(str1.length === str2.length){
        let distance = 0
        for(let i = 0; i < str1.length; i++){
            if(str1[i] !== str2[i]){
                distance++
            }
        }
        return distance
    }else{
        console.log('Strings dont match')
    }
}

console.log(hammingDistance('river', 'rover'), 1)
console.log(hammingDistance('rivEr', 'roper'), 2)
console.log(hammingDistance('ATTRACTIVE', 'attractimp'), 2)
console.log(hammingDistance('ATTRACTIVENESS', 'attractive'), 'Strings dont match')