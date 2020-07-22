// function climbingStairs(n) {
//     let count = 0;
//     function dfs(n) {
//         if (n === 0) {
//             count++;
//             return;
//         }
//         if (n - 2 >= 0) {
//             dfs(n - 2);
//         }

//         if (n - 1 >= 0) {
//             dfs(n - 1);
//         }
//     };
//     dfs(n);
//     return count;
// }

var climbingStairs = function(n) {
    let prev = 0, curr = 1, temp;
    
    for(let i = 0; i < n; i++) {
        temp = prev;
        prev = curr;
        curr += temp;
    }
    return curr;
};

console.log(climbingStairs(2)) // 2
console.log(climbingStairs(3)) // 3
console.log(climbingStairs(44));