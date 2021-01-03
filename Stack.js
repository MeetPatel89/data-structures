const LinkedList = require('./LinkedList');

class Stack {
  constructor(maxSize = Infinity) {
    this.stack = new LinkedList();
    this.size = 0;
    this.maxSize = maxSize;
  }

  push(value) {
    this.stack.addToHead(value);
  }

  pop() {
      if (this.size > 0) {
        const removedData = this.stack.removeHead();
        this.size--;
        return removedData;
      } else {
          return null;
      }
    
  }

  peek() {
    if (this.size > 0) {
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
