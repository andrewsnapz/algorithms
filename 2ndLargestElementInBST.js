class BinaryTreeNode {
    constructor(value) {
      this.value = value;
      this.left  = null;
      this.right = null;
    }

    add(value) { 
        let node = new BinaryTreeNode(value);
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
  
//   function findSecondLargest(treeRoot) {
  
//     // Find the second largest item in the binary search tree

//     if (treeRoot.right) { 
//         return findSecondLargest(treeRoot.right);
//     } else if (treeRoot.left) { 
//         return findLargestBSTValue(treeRoot.left);
//     }
//     return null;
//   }
  
//   function findLargestBSTValue(treeRoot) {
//       if (treeRoot.right) { 
//           return findLargestBSTValue(treeRoot.right);
//       } else if (!treeRoot.right) { 
//           return treeRoot.value;
//       }
//   }

  function findSecondLargest(treeRoot) {
      if (treeRoot.right && (treeRoot.right.left || treeRoot.right.right)) {
          let arrayOfValues = gettingAllValues(treeRoot.right);
          arrayOfValues.sort((a, b) => {
              return a - b;
          });
          return arrayOfValues[arrayOfValues.length - 2];
      }  else if (!treeRoot.right.left && !treeRoot.right.right) {
           return treeRoot.value;
      } else {
          return treeRoot.left.value;
      }
  }

  function gettingAllValues(treeRoot, arrayOfValues = []) {
      arrayOfValues.push(treeRoot.value);
      if (treeRoot.left && !treeRoot.right) {
          gettingAllValues(treeRoot.left, arrayOfValues);
      } else if (!treeRoot.left && treeRoot.right) {
          gettingAllValues(treeRoot.right, arrayOfValues);
      } else if (treeRoot.left && treeRoot.right) {
          gettingAllValues(treeRoot.left, arrayOfValues);
          gettingAllValues(treeRoot.right, arrayOfValues);
      }
      return arrayOfValues;
  }

  //uneven tree
  let oddTree = new BinaryTreeNode(5);
  oddTree.add(3);
  oddTree.add(1);
  oddTree.add(4);
  oddTree.add(8);
  oddTree.add(7);
  oddTree.add(12);
  oddTree.add(10);
  oddTree.add(9);
  oddTree.add(11);

  //even tree
  let evenTree = new BinaryTreeNode(5);
  evenTree.add(3);
  evenTree.add(1);
  evenTree.add(4);
  evenTree.add(8);
  evenTree.add(7);
  evenTree.add(9);

  let tree = new BinaryTreeNode(5);
  tree.add(6);

  console.log(findSecondLargest(oddTree)); //11
  console.log(findSecondLargest(evenTree)); //7
  console.log(findSecondLargest(tree)); //5