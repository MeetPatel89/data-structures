const { Node }  = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    addToHead(data) {
        const newHead = new Node(data);
        let currentHead = this.head;
        this.head = newHead;
        if (currentHead) {
            newHead.nextNode = currentHead;
        }
    }

    addToTail(data) {
        const newTail = new Node(data);
        let currentNode = this.head;
        while(currentNode.next !== null) {
            currentNode = currentNode.next
        }
        currentNode.nextNode = newTail;

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
console.log('Pay attention after this');
linkedList.addToTail("new tail data for our linked list");
console.log(linkedList.head.next.next)
