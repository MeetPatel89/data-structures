class BinaryTree {
    constructor(value, depth = 1) {
        this.value = value;
        this.depth = depth;
        this.left = null;
        this.right = null;
    }
}

const bt = new BinaryTree(35);
console.log(bt);