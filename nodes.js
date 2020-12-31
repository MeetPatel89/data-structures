class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const firstNode = new Node('data for first node');
console.log(firstNode);
console.log(firstNode.data);
console.log(firstNode.next);

(firstNode.next) ? console.log('The node has links') : console.log('This is an orphan node');

module.exports = Node;
