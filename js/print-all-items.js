//write a recursive problem that prints all the numbers, and just the numbers
//example

//[[1,2,3],4,5[6,7,8,[9,10,11,12],[14,15,16],17,18],19,20]

function printAllItems(arr){
    if(arr.length === 1){
        return arr[0]
    }

    for(const value of arr){
        if(Array.isArray(value)){
            for(const num of value){
                return printAllItems(num)
            }
        }else{
            return value
        }
    }
}

console.log(printAllItems([1,2,3,[4,5,6]]))