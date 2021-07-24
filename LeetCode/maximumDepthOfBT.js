// function maxDepth(root) {
//   if (!root) return 0;
//   if (!root.left && !root.right) return 1;

//   return transverse(root.left, 1) >= transverse(root.right, 1)
//     ? transverse(root.left, 1)
//     : transverse(root.right, 1);
// }

// function transverse(root, count) {
//   if (root.left && root.right) {
//     transverse(root.left, count++);
//     transverse(root.right, count++);
//   } else if (root.left && !root.right) {
//     transverse(root.left, count++);
//   } else if (root.right) {
//     transverse(root.right, count++);
//   } else {
//     return count;
//   }
// }

function maxDepth(root) {
  if (root === null) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}
