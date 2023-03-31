//stack follows lifo(last in first out) principle 
class Stack {
  constructor() {
    this.items = [];
    this.top = 0;
  }
  push(element) {
    this.items[this.top] = element;
    this.top = this.top + 1;
  }
  pop() {
    if (this.isEmpty() === false) {
      this.top = this.top - 1;
      //   return this.items.pop();
    }
  }
  isEmpty() {
    return this.top === 0;
  }
  length() {
    return this.top;
  }
  peek() {
    return this.items[this.top - 1];
  }
  print() {
    for (let i = 0; i < this.top; i++) {
      console.log(this.items[i]);
    }
  }
}

let stack = new Stack();

stack.push(5);
stack.push(10);
stack.push(15);
stack.print();
console.log('>>><<<');
stack.pop(15);
stack.print();
console.log('>>><<<', stack.isEmpty());
console.log('>>><<<', stack.peek());
