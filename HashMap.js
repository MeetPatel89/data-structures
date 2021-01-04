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
    }
  }

  retrieve(key) {
    const arrayIndex = this.hash(key);
    return this.hashmap[arrayIndex];
  }
}

const employees = new HashMap(3);
console.log(employees);
