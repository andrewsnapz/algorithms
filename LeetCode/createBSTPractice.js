class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    add(value) {
        let node = new BST(value);
        if (!this.left && this.value > value) {
            this.left = node;
        } else if (!this.right && this.value < value) {
            this.right = node;
        } else if (this.left && this.value > value) {
            return this.left.add(value);
        } else if (this.right && this.value < value) {
            return this.right.add(value);
        }
    }
}


const tree = new BST(5);
tree.add(4);
tree.add(3);
tree.add(6);
tree.add(7);
tree.add(1);
tree.add(8);

console.log(tree)
