const { Node } = require('./Node');
const LinkedList = require('./LinkedList');

class HashMap {
  constructor(size = 0) {
    this.hashmap = new Array(size)
        .fill(null)
        .map(() => new LinkedList());
  }

  hash(key) {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode += key.charCodeAt(i) + hashCode;
    }
    hashCode = hashCode % this.hashmap.length;
    return hashCode;
  }

  assign(key, value) {
    const arrayIndex = this.hash(key);
    const linkedList = this.hashmap[arrayIndex];
    if (!linkedList.head) {
        linkedList.addToHead({key, value});
        return;
    } else {
        let currentNode = linkedList.head;
        while(currentNode) {
            if (currentNode.data.key === key) {
                currentNode.data = {key, value}
            } else if (!currentNode.nextNode) {
                currentNode.nextNode = new Node({key, value});
                break;
            }
            currentNode = currentNode.nextNode();
        }
    }
  }

  retrieve(key) {
    const arrayIndex = this.hash(key);
    let currentNode = this.hashmap[arrayIndex].head;
    while(currentNode) {
        if (currentNode.data.key === key) {
            return currentNode.data.value;
        }
        currentNode = currentNode.nextNode;
    } 
    return null;
  }
}

const employees = new HashMap(3);
console.log(employees);
employees.assign('234', 'Nautilus');
employees.assign('456', 'Fibonacci');
employees.assign('987', 'Logarithm');
console.log(employees.retrieve('4563'));

