const LinkedList = require('./LinkedList');

class Queue {
  constructor(maxSize = Infinity) {
    this.queue = new LinkedList();
    this.size = 0;
    this.maxSize = maxSize;
  }

  hasRoom() {
      if (this.size < this.maxSize) {
          return true;
      } else {
          return false;
      }
  }

  isEmpty() {
      if (this.size === 0) {
          return true;
      } else {
          return false;
      }
  }

  enqueue(data) {
    this.queue.addToTail(data);
    this.size++;
    console.log(`Added '${data}'! Queue size is now ${this.size}`);
  }

  dequeue() {
      const data = this.queue.removeHead();
      this.size--;
      console.log(`Removed ${data}! Queue size is ${this.size}`);
  }
}

const restaurantOrder = new Queue();
console.log(restaurantOrder);
restaurantOrder.enqueue('first order');
restaurantOrder.enqueue('second order');
restaurantOrder.enqueue('third order');
console.log(restaurantOrder);
restaurantOrder.queue.printList();
restaurantOrder.dequeue();
restaurantOrder.queue.printList();

