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
}
