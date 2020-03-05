function maxAreaOfIsland(grid) {
    let areaArr = [];
    let n = grid.length;
    let m = grid[0].length;
    
    function areaOfIsland(i,j) {
        let widthCount = width(i, j);
        console.log(widthCount)
        
        function width(i,j, width = 1) {
            grid[i][j] = 0;
            if (grid[i][j - 1] === 1 && grid[i][j + 1] !== 1) {
                width++
                width(i , j - 1);
            } else if (grid[i][j + 1] === 1 && grid[i][j - 1] !== 1) {
                width++;
                width(i , j + 1);
            } else if (grid[i][j + 1] === 1 && grid[i][j - 1] === 1) {
                width++;
                width(i , j - 1);
                width(i , j + 1);
            }
            console.log(width);
        }
    }
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 1) {
                areaOfIsland(i,j);
            }
        }
    }
    // console.log(areaArr);
};

let grid1 = [
    [1,1,0,0,0],
    [1,1,0,0,0],
    [0,0,0,1,1],
    [0,0,0,1,1]
];

console.log(maxAreaOfIsland(grid1));