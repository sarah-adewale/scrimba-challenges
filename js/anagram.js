


function anagram(strA, strB){
    //  create a map of strA

    function charMap(str){
        let cache = {}

        for(let char of str){
            if(cache[char]){
                cache[char]++
            }else{
                cache[char] = 1
            }
        }
        return cache
    }
    // console.log(charMap('silent'))

    if(strA.length === strB.length){
        let newStrA = charMap(strA)
        let newStrB = charMap(strB)

        for(let char in newStrA){
            if(newStrA[char] !== newStrB[char]){
                return false
            }
            return true
        }
    }else{
        return false
    }
    

}




console.log(anagram('listen', 'silent'))