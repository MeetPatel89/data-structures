class TreeNode {
    constructor(data) {
        this.data = data;
        this.children = new Array();
    }
}

const tree = new TreeNode(1);
console.log(tree);

module.exports = TreeNode;