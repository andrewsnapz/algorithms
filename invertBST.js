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

  function invertBST(tree) {
      let leftBranch = switchBranches(tree.left);
      let rightBranch = switchBranches(tree.right);
      tree.left = rightBranch;
      tree.right = leftBranch;
      return tree;
  }

  function switchBranches(branch) {
      if (branch.left && branch.right) {
          let copyOfLeft = branch.left;
          let copyOfRight = branch.right;
          branch.left = copyOfRight;
          branch.right = copyOfLeft;
          switchBranches(branch.left);
          switchBranches(branch.right);
      } else if (branch.left && !branch.right) {
          branch.right = branch.left;
          branch.left = null;
          switchBranches(branch.right);
      } else if (!branch.left && branch.right) {
          branch.left = branch.right;
          branch.right = null;
          switchBranches(branch.left);
      }
          return branch;
  };

  const tree = new BST(4);
  tree.add(2);
  tree.add(1);
  tree.add(3);
  tree.add(7);
  tree.add(6);
  tree.add(9);

  console.log(invertBST(tree));
  console.log(invertBST({}))
