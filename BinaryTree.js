class BinaryTree {
  constructor(value, depth = 1) {
    this.value = value;
    this.depth = depth;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = new BinaryTree(value, this.depth + 1);
      }
    } else {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = new BinaryTree(value, this.depth + 1);
      }
    }
  }

  retrieve(value) {
      if (value === this.value) {
          return this
      } else if (value < this.value && this.left) {
            return this.left.retrieve(value);
      } else if (value > this.value && this.right) {
          return this.right.retrieve(value);
      } else {
          return null;
      }
  }

  depthFirstTraversal() {
      if (this.left) {
          console.log(this.value);
          console.log('');
          this.left.depthFirstTraversal();
      }
      console.log(this.value, this.depth);
      if (this.right) {
          console.log(this.value);
          console.log('');
          this.right.depthFirstTraversal();
      }
  }
}

const bt = new BinaryTree(35);
console.log(bt);
bt.insert(30);
bt.insert(50);
bt.insert(28);
bt.insert(32);
bt.insert(45);
bt.insert(54);
console.log(bt);
console.log('Retrieve operation on binary tree');
console.log(bt.retrieve(450));
console.log('Depth first traversal');
bt.depthFirstTraversal();
