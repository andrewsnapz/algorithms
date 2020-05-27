// const zigzagLevelOrder = root => {
//     let queue = [];
//     let arr = [];
//     let direction = 'R';
//     if (!root) {
//         return root;
//     } else {
//         queue.push(root);
//     }

//     while (queue.length > 0) {
//         if (direction === 'R') {
//             if (queue[0].left && queue[0].right) {
//                 queue.push(root.right, root.left);
//                 direction = 'L';
//                 arr.push(queue.shift());
//             } else if (!queue[0].left && queue[0].right) {
//                 queue.push(queue[0].right);
//                 direction ='L';
//                 arr.push(queue.shift());
//             } else if (!queue[0].right && queue[0].left) {
//                 queue.push(queue[0].left);
//                 direction = 'L'
//                 arr.push(queue.shift());
//             }
//         }
        
//         if (direction === 'L') {
//             if (queue[0].left && queue[0].right) {
//                 queue.push(root.left, root.right);
//                 direction = 'R';
//                 arr.push(queue.shift());
//             } else if (!queue[0].left && queue[0].right) {
//                 queue.push(queue[0].right);
//                 direction = 'R';
//                 arr.push(queue.shift());
//             } else if (!queue[0].right && queue[0].left) {
//                 queue.push(queue[0].left);
//                 direction = 'R';
//                 arr.push(queue.shift());
//             }
//         }
//     }
//     console.log(arr)
// };

