// class Node {
//     constructor(name) {
//         this.name = name;
//         this.children = [];
//     }
//     addChild(name) {
//         this.children.push(new Node(name));
//         return this;
//     }

//     breadthFirstSearch(array) {
//         const queue = [this];
//         const array = [];
//         while(queue.length !== 0) {
//             let shiftedElement = queue.shift();
//             array.push(shiftedElement);
//             if (shiftedElement.children.length !== 0) {
//                 for (let i = 0; i < shiftedElement.children.length) {
//                     queue.push(shiftedElement.children[i]);
//                 }
//             }
//         }
//         return array;
//     }
// }


//BST:
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

    breadthSearchFirst(root, queue = [], arr = []) {
        console.log("this is the root value: ", root.value)
        queue.push(root);
        // console.log("this is the queue: ", queue);
        arr.push(queue.shift().value);
        console.log("this is the final arr: ", arr);
        if (root.left && root.right) {
            queue.push(root.left);
            queue.push(root.right);
            this.breadthSearchFirst(root.left, queue, arr);
            this.breadthSearchFirst(root.right, queue, arr);
        } else if (root.left && !root.right) {
            queue.push(root.left);
            console.log("this is the root.left.value: ", root.left.value)
            queue.push(null);
            this.breadthSearchFirst(root.left, queue, arr);
        } else if (root.right && !root.left) {
            queue.push(root.right);
            queue.push(null);
            this.breadthSearchFirst(root.right, queue, arr);
        } else if (!root.left && !root.right) {
            return arr;
        }
    }
  }

  const tree = new BST(6);
  tree.add(5);
  tree.add(7);
  tree.add(4);
  tree.add(8);

  console.log(tree.breadthSearchFirst(tree));
