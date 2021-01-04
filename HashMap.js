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
    return hashCode;
  }
}

const hashmap = new HashMap();
let x = hashmap.hash("dad");
console.log(x);
console.log(hashmap.hash("dda"));