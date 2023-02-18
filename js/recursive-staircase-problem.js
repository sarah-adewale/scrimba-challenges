
function steps(n){
    if(n < 0){
        return 0
    }else if(n === 0 || n === 1){
        return 1
    }else{
        return steps(n - 1) + steps(n - 2) + steps(n - 3)
    }

}

let result = steps(5)
console.log(result)