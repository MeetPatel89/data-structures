class HashMap {
  constructor(size = 0) {
    this.hashmap = new Array(size).fill(null);
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
      this.hashmap[arrayIndex] = value;
  }

  retrieve(key) {
      const arrayIndex = this.hash(key);
      return this.hashmap[arrayIndex];
  }
}

const employees = new HashMap(3);
console.log(employees.hash('3456'))
employees.assign('3456', 'Nautilus');
console.log(employees);
console.log(employees.hashmap);
console.log(employees.hash('3456'));
console.log(employees.retrieve('3456'));
