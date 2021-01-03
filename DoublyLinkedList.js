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
    }
    this.head = newHead;
    if (!this.tail) {
      this.tail = newHead;
    }
  }

  addToTail(data) {
    const newTail = new NodeDouble(data);
    const currentTail = this.tail;
    if (currentTail) {
      currentTail.nextNode = newTail;
      newTail.previousNode = currentTail;
    }
    this.tail = newTail;
    if (!this.head) {
      this.head = newTail;
    }
  }

  removeHead() {
    let currentHead = this.head;
    if (!currentHead) {
      return;
    }
    this.head = currentHead.nextNode;
    if (this.head) {
      this.head.previousNode = null;
    } else {
      this.removeTail();
    }
    return currentHead.data;
  }

  removeTail() {
    let currentTail = this.tail;
    if (!currentTail) {
      return;
    }
    this.tail = currentTail.previousNode;
    if (this.tail) {
      this.tail.nextNode = null;
    } else {
      this.removeHead();
    }
    return currentTail.data;
  }

  removeByData(data) {
    let nodeToRemove;
    let currentNode = this.head;
    while (currentNode !== null) {
        if (currentNode.data === data) {
            nodeToRemove = currentNode;
            break;
            
        }
        currentNode = currentNode.nextNode;
    }
    if (nodeToRemove === this.head) {
      this.removeHead();
    } else if (nodeToRemove === this.tail) {
      this.removeTail();
    } else if (!nodeToRemove) {
      return null;
    } else {
      const afterRemovedNode = nodeToRemove.nextNode;
      const beforeRemovedNode = nodeToRemove.previousNode;
      beforeRemovedNode.nextNode = afterRemovedNode;
      afterRemovedNode.previousNode = beforeRemovedNode;
      return nodeToRemove;
    }
  }
}

const randomDoublyLinkedList = new DoublyLinkedList();
console.log(randomDoublyLinkedList);
randomDoublyLinkedList.addToHead('Add first head element');
randomDoublyLinkedList.addToHead('Add second head element');
randomDoublyLinkedList.addToTail('Add first tail element');
console.log(randomDoublyLinkedList);
randomDoublyLinkedList.removeByData('Add second head element');
console.log(randomDoublyLinkedList);
randomDoublyLinkedList.removeByData('Add first tail element');
randomDoublyLinkedList.removeByData('Add first head');
randomDoublyLinkedList.removeByData('Add first head element');
randomDoublyLinkedList.printList();
