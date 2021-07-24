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

function diameterOfBST(root) {
    let longestDistanceLeft = longestBranch(root.left);
    let longestDistanceRight = longestBranch(root.right);
    return longestDistanceLeft + longestDistanceRight + 1;
}

function longestBranch(branch, distance = 0) {
    let longestPath = [];
    let incrementDistance = distance + 1;
    if (branch.left && branch.right) {
        longestBranch(branch.left, incrementDistance);
        longestBranch(branch.right, incrementDistance);
    } else if (branch.left && !branch.right) {
        longestBranch(branch.left, incrementDistance);
    } else if (branch.right && !branch.left) {
        longestBranch(branch.right, incrementDistance);
    } else {
        longestPath.push(distance);
    }
    return Math.max(longestPath);
}

const tree = new BST(1);
BST.add(2);
BST.add(3);
BST.add(2);
BST.add(4);
BST.add(5);

console.log(diameterOfBST(tree));