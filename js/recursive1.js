function addUntill100(arr){
    if(arr.length === 0) return 0
    let result = addUntill100(arr.slice(1))
    if(arr[0] + result > 100){
        return result
    }else{
        return arr[0] + result
    }
}

console.log(addUntill100([9,2,3,4,5,90]))