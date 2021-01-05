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
}

const tree = new TreeNode(1);
tree.addChild(4);
tree.addChild(40);
tree.addChild(34);
tree.children[0].addChild(50);
tree.children[0].addChild(101);
tree.children[0].addChild(22);
const nodeToRemove = new TreeNode(101);
tree.removeChild(nodeToRemove);
console.log(tree);
console.log('Printed tree...');
tree.print();

module.exports = TreeNode;