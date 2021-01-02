const { NodeDouble } = require('./Node');

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  printList() {
    let listData = '<head> <-> ';
    let currentHead = this.head;
    while (currentHead !== null) {
      listData += `${currentHead.data} <-> `;
      currentHead = currentHead.nextNode;
    }
    listData += `<tail>`;
    console.log(listData);
  }

  addToHead(data) {
    const newHead = new NodeDouble(data);
    const currentHead = this.head;
    if (currentHead) {
      currentHead.previousNode = newHead;
      newHead.nextNode = currentHead;
      this.head = newHead;
    }
    this.head = newHead;

    this.tail = newHead;
  }
}

const randomDoublyLinkedList = new DoublyLinkedList();

console.log(randomDoublyLinkedList);
randomDoublyLinkedList.addToHead(
  'Random addition to head of doubly linked list'
);
console.log(randomDoublyLinkedList);
randomDoublyLinkedList.addToHead("Another random addition I am loving it");
console.log(randomDoublyLinkedList)
