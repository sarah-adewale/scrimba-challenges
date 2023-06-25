

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

function impStack(arr){
    let stack = []
    let result = ''
    for(let i = 0; i <= arr.length; i++){
        stack.push(arr[i])
    }


    while (!stack.isEmpty()) {
    result += stack.pop();
  }
    return result
}

console.log(impStack(["abcde"]))

