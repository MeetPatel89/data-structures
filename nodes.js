class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  set nextNode(node) {
      this.next = node;
  }
}

const firstNode = new Node('data for first node');
console.log(firstNode);
console.log(firstNode.data);
console.log(firstNode.next);

(firstNode.next) ? console.log('The node has links') : console.log('This is an orphan node');

const secondNode = new Node('data for second node');
console.log(secondNode);

firstNode.nextNode = secondNode;
console.log(firstNode)
console.log(firstNode.next.data);

module.exports = Node;
