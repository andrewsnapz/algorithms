// const uniquePath = (m, n) => {
//   // m refers to rows, height
//   // n refers to columns, width

//   // 1) create matrix from m x n
//   let grid = [];

//   for (let i = 0; i < m; i++) {
//     grid[i] = new Array(n).fill(0);
//   }

//   grid[0][0] = 1;

//   // 2) recursive algo to find combinations
//   return transversingPaths(grid);
// };

// const transversingPaths = (grid, i = 0, j = 0, unqiueCombinations = 0) => {
//   console.log(grid);
//   grid[i][j] = 1;

//   // if bottom and right exists
//   if (grid[i + 1][j] && grid[i][j + 1]) {
//     transversingPaths(grid, i + 1, j, unqiueCombinations);
//     return transversingPaths(grid, i, j + 1, unqiueCombinations);
//   }

//   // if bottom exists
//   if (grid[i + 1][j] && !grid[i][j + 1]) {
//     return transversingPaths(grid, i + 1, j, unqiueCombinations);
//   }

//   // if right exists
//   if (!grid[i + 1][j] && grid[i][j + 1]) {
//     return transversingPaths(grid, i, j + 1, unqiueCombinations);
//   }

//   if (i === grid.length - 1 && j === grid[0].length - 1) {
//     unqiueCombinations++;
//   }
//   console.log(unqiueCombinations);
// };

var uniquePaths = function (m, n) {
  let matrix = [];
  let firstRow = new Array(n).fill(1);
  matrix.push(firstRow);

  for (let i = 1; i < m; i++) {
    let arr = new Array(n).fill(0);
    arr[0] = 1;
    matrix[i] = arr;
  }

  for (let n = 1; n < matrix.length; n++) {
    for (let m = 1; m < matrix[0].length; m++) {
      matrix[n][m] = matrix[n - 1][m] + matrix[n][m - 1];
    }
  }

  return matrix[matrix.length - 1][matrix[0].length - 1];
};

console.log(uniquePath(3, 2)); // 3
console.log(uniquePath(3, 7)); // 28
