const { Node }  = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    addToHead(data) {
        const newHead = new Node(data);
        const currentHead = this.head;
        this.head = newHead;
        if (currentHead) {
            newHead.nextNode = currentHead;
        }
    }
}

const linkedList = new LinkedList();
console.log(linkedList)
linkedList.addToHead("random linked list data");
console.log(linkedList)
linkedList.addToHead(" pre pre pre linked list data");
console.log(linkedList);
linkedList.addToHead("continuing with the experiment");
console.log(linkedList);
console.log(linkedList.head.next.next)
