const LinkedList = require('./LinkedList');

class Queue {
  constructor(maxSize = Infinity) {
    this.queue = new LinkedList();
    this.size = 0;
    this.maxSize = maxSize;
  }

  hasRoom() {
    return this.size < this.maxSize;
  }

  isEmpty() {
    return this.size === 0;
  }

  enqueue(data) {
    if (this.hasRoom()) {
      this.queue.addToTail(data);
      this.size++;
      console.log(`Added '${data}'! Queue size is now ${this.size}`);
    } else {
      throw new Error("Queue has reached it's maximum size");
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      const data = this.queue.removeHead();
      this.size--;
      console.log(`Removed ${data}! Queue size is ${this.size}`);
      return data;
    } else {
      throw new Error('Queue is empty!');
    }
  }
}

const restaurantOrder = new Queue(4);
console.log(restaurantOrder);
restaurantOrder.enqueue('first order');
restaurantOrder.enqueue('second order');
restaurantOrder.enqueue('third order');
restaurantOrder.enqueue('fourth order');
restaurantOrder.enqueue('fifth order');
