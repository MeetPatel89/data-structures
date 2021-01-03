const LinkedList = require('./LinkedList');

class Queue {
  constructor() {
    this.queue = new LinkedList();
    this.size = 0;
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

