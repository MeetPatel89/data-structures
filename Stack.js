const LinkedList = require('./LinkedList');

class Stack {
  constructor(maxSize = Infinity) {
    this.stack = new LinkedList();
    this.size = 0;
    this.maxSize = maxSize;
  }

  hasRoom() {
    return this.size < this.maxSize;
  }

  isEmpty() {
    return this.size === 0;
  }

  push(value) {
    if (this.hasRoom()) {
      this.stack.addToHead(value);
      this.size++;
    } else {
      throw new Error('The stack is full!');
    }
  }

  pop() {
    if (!this.isEmpty()) {
      const removedData = this.stack.removeHead();
      this.size--;
      return removedData;
    } else {
      return null;
    }
  }

  peek() {
    if (!this.isEmpty()) {
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
