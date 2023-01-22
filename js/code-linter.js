class Linter {
  constructor() {
    // We use a simple array to serve as our stack:
    this.stack = [];
  }

  lint(text) {
    // We start a loop which reads each character in our text:
    for (const char of text) {
      // If the character is an opening brace:
      if (this.isOpeningBrace(char)) {
        // We push it onto the stack:
        this.stack.push(char);
      }
      // If the character is a closing brace:
      else if (this.isClosingBrace(char)) {
        // Pop from stack:
        const poppedOpeningBrace = this.stack.pop();
        // If the stack was empty, so what we popped was null,
        // it means that an opening brace is missing:
        if (!poppedOpeningBrace) {
          return `${char} doesn't have opening brace`;
        }
        // If the popped opening brace doesn't match the
        // current closing brace, we produce an error:
        if (this.isNotAMatch(poppedOpeningBrace, char)) {
          return `${char} has mismatched opening brace`;
        }
      }
    }

    // If we get to the end of line, and the stack isn't empty,
    // it means we have an opening brace without a corresponding closing brace, so we produce an error:
    if (this.stack.length > 0) {
      return `${this.stack[this.stack.length - 1]} does not have closing brace`;
    }

    // Return true if line has no errors:
    return true;
  }

  isOpeningBrace(char) {
    return ["(", "[", "{"].includes(char);
  }

  isClosingBrace(char) {
    return [")", "]", "}"].includes(char);
  }

  isNotAMatch(openingBrace, closingBrace) {
    const matchingBraces = { "(": ")", "[": "]", "{": "}" };
    return closingBrace !== matchingBraces[openingBrace];
  }
}
