// var lowestCommonAncestor = function (root, p, q) {
//   if (root === p || root === q) return root;
//   let transverseP = transverse(p);
//   let transverseQ = transverse(q);

//   if (transverseP.includes(q.val)) return p;
//   if (transverseQ.includes(p.val)) return q;

//   let leftBranch = transverse(root.left);
//   let rightBranch = transverse(root.right);
//   // on different branches
//   if (
//     (leftBranch.includes(q.val) && !leftBranch.includes(p.val)) ||
//     (!leftBranch.includes(q.val) && leftBranch.includes(p.val))
//   )
//     return root;
//   if (leftBranch.includes(q.val) && leftBranch.includes(p.val)) {
//     return earliestNode(root.left, p, q);
//   }

//   if (rightBranch.includes(q.val) && rightBranch.includes(p.val)) {
//     return earliestNode(root.right, p, q);
//   }
// };

// const transverse = (node, arr = []) => {
//   arr.push(node.val);

//   if (node.left && node.right) {
//     transverse(node.left, arr);
//     return transverse(node.right, arr);
//   } else if (node.left && !node.right) {
//     return transverse(node.left, arr);
//   } else if (node.right && !node.left) {
//     return transverse(node.right, arr);
//   } else {
//     return arr;
//   }
// };

// const earliestNode = (node, p, q) => {
//   let leftVal = !node.left ? undefined : node.left.val;
//   let rightVal = !node.right ? undefined : node.right.val;

//   if (
//     leftVal === p.val ||
//     rightVal === p.val ||
//     leftVal === q.val ||
//     rightVal === q.val
//   )
//     return node;

//   if (node.left && node.right) {
//     earliestNode(node.left, p, q);
//     return earliestNode(node.right, p, q);
//   } else if (node.left && !node.right) {
//     return earliestNode(node.left, p, q);
//   } else if (node.right && !node.left) {
//     return earliestNode(node.right, p, q);
//   }
// };

var lowestCommonAncestor = function (root, p, q) {
  if (root.val > p.val && root.val > q.val)
    return lowestCommonAncestor(root.left, p, q);
  else if (root.val < p.val && root.val < q.val)
    return lowestCommonAncestor(root.right, p, q);
  else return root;
};

// transverse tree, if p and q are on two different branches, the root is
// the earliest point of convergence

/* 1) create a boolean value, check if p and q lie on different branches.
    if true, return the root

    p and q are nodes themselves, so transverse both p and q to see
    if they contain each other
*/

// if they are connected on the same branch, the earliest node is the
// earliest point of convergence

/* 2) 

*/

// if the are on the same branch, but not connected, the earliest point
// the two nodes converge on is the node to be returned
