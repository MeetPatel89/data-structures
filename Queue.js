const LinkedList = require('./LinkedList');

class Queue {
    constructor() {
        this.queue = new LinkedList();
    }
}

const queue = new Queue();
console.log(queue);