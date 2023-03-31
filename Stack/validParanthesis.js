//20. Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid
// Input: s = "()[]{}"
// Output: true
// Input: s = "(]"
// Output: false
class Stack {
  constructor() {
    this.items = [];
    this.top = 0;
  }
  push(element) {
    this.items[this.top] = element;
    this.top = this.top + 1;
  }
  peek() {
    return this.items[this.top - 1];
  }
  pop() {
    if (this.isEmpty() === false) {
      this.top = this.top - 1;
      //   return this.data.pop();
    }
  }
  isEmpty() {
    return this.top === 0;
  }
  length() {
    return this.top;
  }
}

var isValid = function (s) {
  let stack = new Stack();
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(' || s[i] == '[' || s[i] == '{') {
      stack.push(s[i]);
    } else if (stack.isEmpty() === false) {
      if (
        (stack.peek() == '{' && s[i] == '}') ||
        (stack.peek() == '(' && s[i] == ')') ||
        (stack.peek() == '[' && s[i] == ']')
      ) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  return stack.isEmpty() ? true : false;
};

console.log(isValid('[()[]{}'));
