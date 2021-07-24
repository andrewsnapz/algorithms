// const lowestCommonAncestor = (root, p, q) => {
//   if (root.val === p.val || root.val === q.val) return root;
//   if (onSameNode(p, q.val)) return p;
//   if (onSameNode(q, p.val)) return q;

//   let leftBranch = onSameBranch(root.left);
//   let rightBranch = onSameBranch(root.right);
//   if (
//     (!leftBranch.includes(p.val) && leftBranch.includes(q.val)) ||
//     (leftBranch.includes(p.val) && !leftBranch.includes(q.val))
//   ) {
//     return root;
//   }

//   if (leftBranch.includes(p.val) && leftBranch.includes(q.val))
//     return lca(root.left, root.left, [], p, q);
//   else return lca(root.right, root.right, [], p, q);
// };

// const onSameNode = (node, val) => {
//   if (node.val === val) return true;

//   if (node.left && node.right) {
//     onSameNode(node.left, val);
//     return onSameNode(node.right, val);
//   } else if (node.left && !node.right) {
//     return onSameNode(node.left, val);
//   } else if (!node.left && node.right) {
//     return onSameNode(node.right, val);
//   } else {
//     return false;
//   }
// };

// const onSameBranch = (node, nodeValArr = []) => {
//   nodeValArr.push(node.val);

//   if (node.left && node.right) {
//     onSameBranch(node.left, nodeValArr);
//     return onSameBranch(node.right, nodeValArr);
//   } else if (node.left && !node.right) {
//     return onSameBranch(node.left, nodeValArr);
//   } else if (!node.left && node.right) {
//     return onSameBranch(node.right, nodeValArr);
//   } else {
//     return nodeValArr;
//   }
// };

// const lca = (node, currNode, nodeArr, p, q, pBool = false, qBool = false) => {
//   if (node.val === p.val) pBool = true;
//   if (node.val === q.val) qBool = true;

//   if (node.left && node.right) {
//     lca(node.left, currNode, nodeArr, p, q, pBool, qBool);
//     return lca(node.right, currNode, nodeArr, p, q, pBool, qBool);
//   } else if (node.left && !node.right) {
//     return lca(node.left, currNode, nodeArr, p, q, pBool, qBool);
//   } else if (!node.left && node.right) {
//     return lca(node.right, currNode, nodeArr, p, q, pBool, qBool);
//   }

//   if (pBool && qBool) nodeArr.push(currNode);
//   if (currNode.left && currNode.right) {
//     lca(
//       currNode.left,
//       currNode.left,
//       nodeArr,
//       p,
//       q,
//       (pBool = false),
//       (qBool = false)
//     );
//     return lca(
//       currNode.right,
//       currNode.right,
//       nodeArr,
//       p,
//       q,
//       (pBool = false),
//       (qBool = false)
//     );
//   } else if (currNode.left && !currNode.right) {
//     return lca(
//       currNode.left,
//       currNode.left,
//       nodeArr,
//       p,
//       q,
//       (pBool = false),
//       (qBool = false)
//     );
//   } else if (!currNode.left && currNode.right) {
//     return lca(
//       currNode.right,
//       currNode.right,
//       nodeArr,
//       p,
//       q,
//       (pBool = false),
//       (qBool = false)
//     );
//   } else {
//     return nodeArr[nodeArr.length - 1];
//   }
// };

var lowestCommonAncestor = function (root, p, q) {
  if (!root || root === p || root === q) return root; // edge case or found p or q: return root
  const left = lowestCommonAncestor(root.left, p, q); // look if left child has p or q
  const right = lowestCommonAncestor(root.right, p, q); // look if right child has p or q
  return left && right ? root : left || right; // if both children returned a node, then current is an ancestor of p and q (LCA)
};
