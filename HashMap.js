class HashMap {
  constructor(size = 0) {
    this.hashmap = new Array(size).fill(null);
  }

  hash(key) {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      console.log('charcode for ' + key[i] + ' is ' + key.charCodeAt(i));
      console.log(hashCode);
      hashCode += key.charCodeAt(i) + hashCode;
    }
    hashCode = hashCode % this.hashmap.length;
    return hashCode;
  }
}

const myHashMap = new HashMap(4);
console.log(myHashMap);
console.log(myHashMap.hash('key'));
console.log(myHashMap.hash('key'));
console.log(myHashMap.hash('id'));
console.log(myHashMap.hash('id'));