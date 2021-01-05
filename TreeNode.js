class TreeNode {
    constructor(data) {
        this.data = data;
        this.children = new Array();
    }

    addChild(child) {
        if (child instanceof TreeNode) {
            this.children.push(child)
        } else {
            this.children.push(new TreeNode(child))
        }
    }

    removeChild(childToRemove) {
        const length = this.children.length;
        this.children = this.children.filter(child => {
            if (childToRemove instanceof TreeNode) {
                return childToRemove.data !== child.data;
            } else {
                return childToRemove !== child.data
            }
        })
        if (length === this.children.length) {
            this.children.forEach(child => child.removeChild(childToRemove))
        }
    }

    print(level = 0) {
        let result = '';
        for (let i = 0; i < level; i++) {
            result += '-- ';
        }
        console.log(`${result}${this.data}`);
        this.children.forEach(child => child.print(level + 1));
    }

    depthFirstTraversal() {
        console.log(this.data);
        this.children.forEach(child => child.depthFirstTraversal());
    }
}

const tree = new TreeNode(15);
const randomize = () => Math.floor(Math.random() * 20);

// add first-level children
for (let i = 0; i < 3; i++) {
  tree.addChild(randomize());
}

// add second-level children
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    tree.children[i].addChild(randomize());
  }
}

console.log(tree);
tree.print();
tree.depthFirstTraversal();

module.exports = TreeNode;