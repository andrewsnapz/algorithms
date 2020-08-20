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

// var zigzagLevelOrder = function(root) {
//     if (!root) return [];
//     let obj = {};
//     let output = [];

//     const dfs = (queue, depth = 1) => {
//         while(queue.length) {
//             let node = queue[0];
//             if (!obj[depth]) obj[depth] = [];
//             obj[depth].push(node.val);
            
//             if (node.left) {
//                 queue.push(node.left, depth + 1);
//             }
            
//             if (node.right) {
//                 queue.push(node.right, depth + 1);
//             }

//             if (node.left && node.right) {
//                 depth++;
//             }
            
//             queue.shift();
//         }
//     }
//     dfs([root]);

//     for (let key in obj) {
//         if (parseInt(key) % 2 === 0) {
//             obj[key] = obj[key].reverse();
//         }
//     };

//     return output.push(Object.values(obj));
// };

function zigzagLevelOrder(root) {
    let result = {};

    function transverse(node, depth) {
        if (!node) return;
        if (!result[depth]) result[depth] = [node.val];
        else result[depth].push(node.val);

        transverse(node.left, depth + 1);
        transverse(node.right, depth + 1);
    }

    transverse(root, depth);

    for (let key in result) {
        if (parseInt(key) % 2 === 0) {
            result[depth].reverse();
        }
    }

    return Object.values(result);
}