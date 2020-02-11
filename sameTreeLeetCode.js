/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var isSameTree = function(p, q) {
    // the first element in each array represent the root node, they should be equal
    //need to split each array from numbers that are greater than  or less than the root value (so first number);

};

console.log(isSameTree([1,2,3], [1,2,3]));
let bst1 = [10, 15, 8, 12, 94, 81, 5, 2, 11];
// [15, 12, 94, 81, 11], [8, 5, 2];
// ([94, 81], [12, 11]), ([5, 2]);

let bst2 = [10, 8, 5, 15, 2, 12, 11, 94, 81];
// [15, 12, 11, 94, 81], [8, 5, 2];
// ([94, 81], [12, 11]), ([5, 2]);

console.log(isSameTree(bst1, bst2));

