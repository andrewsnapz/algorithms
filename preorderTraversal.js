class BST {
    constructor(value) {
      this.value = value;
      this.left  = null;
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



// const bstFromPreorder = bst => {
//     let queue = [];
//     let output = [bst.root];
//     if (bst.left && bst.right) {
//         output.push(bst.left);
//         queue.push(bst.right);
//     } else if (bst.left && !bst.right) {
//         output.push(bst.left);
//     } else if (!bst.left && bst.right) {
//         output.push(bst.right);
//     } else if (!bst) {
//         return [];
//     }

//     let position = output[output.length - 1];
//     while(queue.length !== 0 && (!position.left && !position.right)) {
//         if (position.left && position.right) {
//             output.push(position.left);
//             queue.push(position.right);
//             position = position.left;
//         } else if (position.left && !position.right) {
//             output.push(position.left);
//             position = position.left;
//         } else if (!position.left && position.right) {
//             output.push(positon.right);
//             position = position.right;
//         } else if (!position.left && !position.right) {
//             position = queue.pop();
//         }
//     }
//     return output;
// };

function bstFromPreorder(preorder) {
    return preOrderHelper(preorder);
};

function preOrderHelper(root) {
    if (root !== null) {
        console.log(root.val);
        preOrderHelper(root.left);
        preOrderHelper(root.right);
    }
}

const tree = new BST(10);
tree.add(15)
tree.add(5)
tree.add(50)
tree.add(3)
tree.add(7)
tree.add(12)


// console.log(tree)
console.log(bstFromPreorder(tree));