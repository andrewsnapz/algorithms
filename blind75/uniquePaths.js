const uniquePath = (m, n) => {
  // m refers to rows, height
  // n refers to columns, width

  // 1) create matrix from m x n
  let grid = [];
  let width = [];

  for (let i = 0; i < n; i++) {
    width.push(0);
  }

  for (let i = 0; i < m; i++) {
    grid.push(width);
  }

  grid[0][0] = 1;
  console.log(grid);
  // 2) recursive algo to find combinations
  return transversingPaths(grid);
};

const transversingPaths = (grid, i = 0, j = 0, unqiueCombinations = 0) => {
  //   console.log(grid);
  grid[i][j] = 1;

  // if bottom and right exists
  if (grid[i + 1][j] && grid[i][j + 1]) {
    transversingPaths(grid, i + 1, j, unqiueCombinations);
    return transversingPaths(grid, i, j + 1, unqiueCombinations);
  }

  // if bottom exists
  if (grid[i + 1][j] && !grid[i][j + 1]) {
    return transversingPaths(grid, i + 1, j, unqiueCombinations);
  }

  // if right exists
  if (!grid[i + 1][j] && grid[i][j + 1]) {
    return transversingPaths(grid, i, j + 1, unqiueCombinations);
  }

  console.log(grid);
};

// const transversingPaths = (
//   grid,
//   unqiueCombinations = 0,
//   width = 0,
//   height = 0
// ) => {
//   // if both bottom and right exists:
//   if (grid[height + 1][width] && grid[height][width + 1]) {
//     transversingPaths(grid, unqiueCombinations, width, height + 1); // bottom
//     return transversingPaths(grid, unqiueCombinations, width + 1, height); // right
//   } else if (!grid[height + 1][width] && grid[height][width + 1]) {
//     // if only right exists
//     return transversingPaths(grid, unqiueCombinations, width + 1, height);
//   } else if (grid[height + 1][width] && !grid[height][width + 1]) {
//     // if only bottom exists
//     return transversingPaths(grid, unqiueCombinations, width, height + 1);
//   } else {
//     unqiueCombinations++;
//   }
// };

console.log(uniquePath(3, 2)); // 3
// console.log(uniquePath(3, 7)); // 28
