// const diameterOfBinaryTree = root => {
//     let diameter = 0;
//     if (!root || (!root.left && !root.right)) {
//         return diameter;
//     } else {
//         diameter++;
//     }

//     let curr = root;
//     let queue = [root];
//     while(curr || queue.length > 0) {
//         if (curr.left && curr.right) {
//             queue.push(curr.left, curr.right);
//             diameter++;
//             queue.shift();
//             curr = queue[0];
//         } else if (curr.left && !curr.right) {
//             queue.push(curr.left);
//             diameter++;
//             queue.shift();
//             curr = queue[0];
//         } else if (!curr.left && curr.right) {
//             queue.push(curr.right);
//             diameter++;
//             queue.shift();
//             curr = queue[0];
//         } else if (!curr.left && !curr.right) {
//             queue.shift();
//             curr = queue[0];
//         }
//     }
//     return diameter;
// }

const diameterOfBinaryTree = root => {
    let diameter = 0;
    if (!root || (!root.left && !root.right)) {
        return diameter;
    } else if (root.left && !root.right) {
        diameter++;
        let branchCount = diameterCount(root.left);
        return diameter + branchCount;
    } else if (!root.left && root.right) {
        diameter++;
        let branchCount = diameterCount(root.right);
        return diameter + branchCount;
    } else if (root.left && root.right) {
        diameter = 2;
        let branchCount = diameterCount(root.left) + diameterCount(root.right);
        return diameter + branchCount;
    }
}

const diameterCount = branch => {
    let count = 0;
    let curr = branch;
    let queue = [...branch];
    while(curr || queue.length > 0) {
        if (curr.left && curr.right) {
            count++;
            queue.push(curr.left, curr.right);
            queue.shift();
            curr = queue[0];
        } else if (!curr.left && curr.right) {
            count++;
            queue.push(curr.right);
            queue.shift();
            curr = queue[0];
        } else if (curr.left && !curr.right) {
            count++;
            queue.push(curr.left);
            queue.shift();
            curr = queue[0];
        } else if (!curr.left && !curr.right) {
            queue.shift();
            curr = queue[0];
        }
    }
    return count;
}