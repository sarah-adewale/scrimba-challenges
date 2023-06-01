
function reverse(string){
    if(string.length === 1){
        return string[0]
    }
    return reverse(string.slice(1)) + string[0]
}

const reversedString = reverse("Hello, World!");
console.log(reversedString);