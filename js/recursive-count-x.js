

function count_x(string) {
    if(string.length === 0){
        return 0
    }

    let result = count_x(string.slice(1))
    if (string[0] === "x") {
      return 1 + result;
    } else {
      return result;
    }
}



const count = count_x("xoxo");
console.log(count);  // Output: 2



