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

  get nextNode() {
    return this.next;
  }
}

const firstNode = new Node('data for first node');

const secondNode = new Node('data for second node');

firstNode.nextNode = secondNode;

exports.Node = Node;
