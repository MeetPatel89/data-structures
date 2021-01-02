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

class Node_double {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }

  setNextNode(node) {
    if (node instanceof Node_double || node === null) {
      this.next = node;
    } else {
      throw new Error('Next node must be a member of the Node_double class or null')
    }
  }

  setPreviousNode(node) {
    if (node instanceof Node_double || node === null) {
      this.previous = node;
    } else {
      throw new Error('Next node must be a member of the Node_double class or null')
    }
  }

  getNextNode() {
    return this.next;
  }
  
  getPreviousNode() {
    return this.previous;
  }
}

const firstNode = new Node('data for first node');

const secondNode = new Node('data for second node');

firstNode.nextNode = secondNode;

exports.Node = Node;
