// Your task is to write function factorial.

function factorial(n){
  //create a base case
  if(n === 0){
    return 1
  }
  //recursion
  return n * factorial(n - 1)
}

