const { Node } = require('./Node');

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
    if (currentNode === null) {
      this.addToHead(data);
    } else {
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.next;
      }
      currentNode.nextNode = newTail;
    }
  }

  removeHead() {
    const currentHead = this.head;
    if (currentHead) {
        this.head = currentHead.nextNode;
        return currentHead.data;
    } else {
      return;
    }
  }

  printList() {
      let listData = '<head> -> ';
      let currentHead = this.head;
      while (currentHead !== null) {
          listData += `${currentHead.data} -> `;
          currentHead = currentHead.nextNode;
      }
      listData += `<tail>`
      return listData;
  }
}

const linkedList = new LinkedList();
console.log(linkedList);
linkedList.addToTail('tail data for empty linked list');
console.log(linkedList);
linkedList.addToHead('head data for the linked list');
console.log(linkedList);
linkedList.addToTail('last tail data for linked list');
console.log(linkedList);
console.log(linkedList.printList());
console.log('Removing head');
const headData = linkedList.removeHead();
console.log(linkedList);
console.log(headData);
console.log(linkedList.printList());

