const isSymmetric = root => {
    if (!root) return false;

    const breadthForSearch = queue => {
        if (!queue.length) return
        if (!obj[level]) obj[level] = [];
        let curr = queue[0];
        console.log(curr)
        if (curr.left && curr.right) {
            queue.push(curr.left , curr.right);
            queue.shift();
            breadthForSearch(queue);
        } else if (curr.left && !curr.right) {
            queue.push(curr.left);
            queue.shift();
            breadthForSearch(queue);
        } else if (curr.right && !curr.left) {
            queue.push(curr.right);
            queue.shift();
            breadthForSearch(queue);
        } else {
            queue.shift();
            breadthForSearch(queue);
        }
    }
    breadthForSearch([root]);
    console.log(obj)
};

// const isSymmetric = root => {
//     if (!root) return false;
//     let obj = {};

//     const vistingNodes = (root, level = 1) => {
//         if (!obj[level]) obj[level] = [];
//         if (root.left && root.right) {
//             obj[level].push(root.left.val, root.right.val);
//             vistingNodes(root.left, level++);
//             vistingNodes(root.right, level++);
//         } else if (root.left && !root.right) {
//             obj[level].push(root.left.val);
//             visitingNodes(root.left, level++);
//         } else if (root.right && !root.left) {
//             obj[level].push(root.right.val);
//             visitingNodes(root.right, level++);
//         } else if (!root.left && !root.right) {
//             return
//         }
//     }
//     console.log(obj)
// };
