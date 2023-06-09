// Suppose we’re writing software for a clothing manufacturer. Our code accepts an array of newly produced clothing 
// items (stored as strings), and creates text for every possible label we’ll need.

// Specifically, our labels should contain the item name plus its size, ranging from 1 to 5. For example, 
// if we have the array, ["Purple Shirt", "Green Shirt"], we want to produce label text for those shirts like this: 

function clothingLabels(arr){
    let clothingOptions = []

    for(let i = 0; i < arr.length; i++){
        for(let j = 1; j <= 5; j++){
            clothingOptions.push(arr[i] + 'size: ' + j)
        }
    }

    return clothingOptions
}

console.log(clothingLabels(["Purple Shirt", "Green Shirt"]))

