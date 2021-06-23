// var isSameTree = function (p, q) {
//   if (p.val !== q.val) return false;
//   if (p.left && q.left && p.right && q.right) {
//     isSameTree(p.left, q.left);
//     return isSameTree(p.right, q.right);
//   } else if (p.left && q.left && !p.right && !q.right) {
//     return isSameTree(p.left, q.left);
//   } else if (!p.left && !q.left && p.right && q.right) {
//     return isSameTree(p.right && q.right);
//   } else {
//     return true;
//   }
// };

// var isSameTree = function (p, q) {
//   let pArr = transverse(p);
//   let qArr = transverse(q);
// };

// const transverse = (node, arr = []) => {
//   arr.push(node.val);

//   if (node.left && node.right) {
//     transverse(node.left, arr);
//     return transverse(node.right, arr);
//   } else if (node.left && !node.right) {
//     return transverse(node.left, arr);
//   } else if (!node.left && node.right) {
//     arr.push(null);
//     return transverse(node.right, arr);
//   } else {
//     return arr;
//   }
// };

var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
