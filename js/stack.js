

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

function reverseString(str) {
  const stack = new Stack();
  let reversedString = '';

  // Push each character of the string onto the stack
  for (let i = 0; i < str.length; i++) {
    stack.push(str.charAt(i));
  }

  // Pop each character from the stack to construct the reversed string
  while (!stack.isEmpty()) {
    reversedString += stack.pop();
  }

  return reversedString;
}

const input = "abcde";
const reversed = reverseString(input);
console.log(reversed); // Output: "edcba"

