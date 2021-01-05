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
}

const tree = new TreeNode(1);
console.log(tree);
tree.addChild(4);
console.log(tree);
tree.addChild(40);
console.log(tree);
module.exports = TreeNode;