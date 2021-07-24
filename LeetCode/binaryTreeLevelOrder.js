// let levelOrder = function(root) {
//     if (!root) return [];
//     let obj = {};
//     let depth = 1;
//     let queue = [root];

//     while (queue.length) {
//         if (!obj[depth]) obj[depth] = [];
//         let node = queue[0];
//         obj[depth].push(node.val);

//         if (node === 'd') {
//             depth++;
//             queue.shift();
//             continue;
//         };

//         if (node.left && node.right) {
//             queue.push(node.left, node.right, 'd');
//         };

//         if (node.right && !node.left) {
//             queue.push(node.right, 'd');
//         };

//         if (node.left && !node.right) {
//             queue.push(node.left, 'd');
//         };

//         queue.shift();
//     }

//     console.log(obj)
// };

var levelOrder = function(root) {
    const result = [];
    
    function traverse(node, level) {
        if(!node) return;
        
        if(!result[level]) result[level] = [node.val];
        else result[level].push(node.val);
        
        traverse(node.left, level+1);
        traverse(node.right, level+1);
    }
    
    traverse(root, 0);
    return result;
};