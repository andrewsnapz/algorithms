// function numIslands(grid) {
//     const m = grid.length;
//     const n = grid[0].length;
//     let total = 0;

//     function processIsland(i, j) {
//         grid[i][j] = 0;

//         if (i > 0 && grid[i - 1][j]) {
//             processIsland(i - 1, j);
//         }
//         if (i < m - 1 && grid[i + 1][j]) {
//             processIsland(i + 1, j);
//         }
//         if (j > 0 && grid[i][j - 1]) {
//             processIsland(i, j - 1);
//         }
//         if (j < n - 1 && grid[i][j + 1]) {
//             processIsland(i, j + 1);
//         };
//         for (let i = 0; i < m; i++) {
//             for (let j = 0; j < n; j++) {
//                 if (grid[i][j]) {
//                     total++;
//                     processIsland(i, j);
//                 }
//             }
//         }
//     }
//     return total;
// }


const numIslands = grid => {
    const m = grid.length
    const n = grid[0].length;
    let total = 0;
    
    const processIsland = (i, j) => {
      grid[i][j] = 0;
      console.log(grid);
      if (i > 0 && grid[i - 1][j]) // top
        processIsland(i - 1, j);
      if (i < m - 1 && grid[i + 1][j]) // bottom
        processIsland(i + 1, j);
      if (j > 0 && grid[i][j - 1]) //left
        processIsland(i, j - 1);
      if (j < n - 1 && grid[i][j + 1]) //right
        processIsland(i, j + 1);
    };
    
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j]) {
          total++;
          processIsland(i, j);
        }
      }
    }
    
    return total;
  }
  
let grid1 = [
    [1,1,1,1,0],
    [1,1,0,1,0],
    [1,1,0,0,0],
    [0,0,0,0,0],
];

let grid2 = [
    [1,1,0,0,0],
    [1,1,0,0,0],
    [0,0,1,0,0],
    [0,0,0,1,1],
];

let grid3 = [
    [1,1,0,0,0],
    [1,1,0,0,0],
    [0,0,1,0,0],
    [0,0,0,1,1]
];

// console.log(numIslands(grid1)); // 1;
// console.log(numIslands(grid2)); //3;
console.log(numIslands(grid3)); //3;