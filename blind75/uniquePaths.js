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

function uniquePath(m, n) {
  const result = [[]];
  // Adding the first row of ’1’s to the array
  for (let i = 0; i < n; i += 1) {
    result[0].push(1);
  }
  // iterating over each of the rows
  for (let i = 1; i < m; i += 1) {
    result.push([1]); // adding 1 to the first, left most square

    // Getting the total for the current square
    for (let j = 1; j < n; j += 1) {
      result[i][j] = result[i][j - 1] + result[i - 1][j];
    }
  }
  // Return the bottom right hand value that has the total.
  return result[m - 1][n - 1];
}
console.log(uniquePath(3, 2)); // 3
console.log(uniquePath(3, 7)); // 28
