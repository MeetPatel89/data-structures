const LinkedList = require('./LinkedList');

class Stack {
  constructor() {
    this.stack = new LinkedList();
  }

  push(value) {
    this.stack.addToHead(value);
  }

  pop() {
    const removedData = this.stack.removeHead();
    return removedData;
  }

  peek() {
    if (this.stack.head) {
      return this.stack.head.data;
    } else {
      return 'The stack is empty!';
    }
  }
}

const stack = new Stack();
console.log(stack);
console.log(stack.peek());
stack.push('First stack');
stack.push('Second stack');
console.log(stack.pop());
