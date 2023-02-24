

function count_x(string) {
    if(string.length === 0){
        return 0
    }

  if (string[0] === "x") {
    return 1 + count_x(string.slice(1));
  } else {
    return count_x(string.slice(1));
  }
}



const count = count_x("xoxo");
console.log(count);  // Output: 2



