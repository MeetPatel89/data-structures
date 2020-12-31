class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  set nextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error('The value for next should be null or another node');
    }
  }
}

const firstNode = new Node('data for first node');
console.log(firstNode);
console.log(firstNode.data);
console.log(firstNode.next);

firstNode.next
  ? console.log('The node has links')
  : console.log('This is an orphan node');

const secondNode = new Node('data for second node');
console.log(secondNode);

firstNode.nextNode = "random string that will throw error";
console.log(firstNode);

module.exports = Node;
