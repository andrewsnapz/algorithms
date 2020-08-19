// const isSymmetric = root => {
//     if (!root) return false;

//     const breadthForSearch = (queue, level = 1) => {
//         if (!queue.length) return
//         if (!obj[level]) obj[level] = [];
//         let curr = queue[0];
//         console.log(curr)
//         if (curr.left && curr.right) {
//             queue.push(curr.left , curr.right);
//             queue.shift();
//             breadthForSearch(queue);
//         } else if (curr.left && !curr.right) {
//             queue.push(curr.left);
//             queue.shift();
//             breadthForSearch(queue);
//         } else if (curr.right && !curr.left) {
//             queue.push(curr.right);
//             queue.shift();
//             breadthForSearch(queue);
//         } else {
//             queue.shift();
//             breadthForSearch(queue);
//         }
//     }
//     breadthForSearch([root]);
//     console.log(obj)
// };

var isSymmetric = function(root) {
    if(!root) return true;
    return dfs(root.left, root.right);
  };
  
  function dfs(s, t){
    if(!s && !t) return true;
    if(!s || !t) return false;
    if(s.val !== t.val) return false;
    
    return dfs(s.left, t.right) && dfs(s.right, t.left)
  }