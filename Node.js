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

class NodeDouble {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }

  set nextNode(node) {
    if (node instanceof NodeDouble || node === null) {
      this.next = node;
    } else {
      throw new Error('Next node must be a member of the Node_double class or null')
    }
  }

  set previousNode(node) {
    if (node instanceof NodeDouble || node === null) {
      this.previous = node;
    } else {
      throw new Error('Next node must be a member of the Node_double class or null')
    }
  }

  get nextNode() {
    return this.next;
  }
  
  get previousNode() {
    return this.previous;
  }
}

const firstNode = new Node('data for first node');

const secondNode = new Node('data for second node');

firstNode.nextNode = secondNode;

exports.Node = Node;
exports.NodeDouble = NodeDouble;
