class HashMap {
    constructor(size = 0) {
        this.hashmap = new Array(size).fill(null);
    }
}

const hashmap = new HashMap();
console.log(hashmap);

let fruits = new Array('apple', 'watermelon');
console.log(fruits);
console.log(fruits.length);