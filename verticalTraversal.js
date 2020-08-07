var verticalTraversal = function(root) {
    if (!root) return [];
    let coordinatesArray = [];
    getCoordinates(root, coordinatesArray);
    console.log(coordinatesArray.sort();
};

var getCoordinates = function(root, arr, x = 0, y = 0) {
    if (root.left && root.right) {
        arr.push([x, y, root.val]);
        getCoordinates(root.left, arr, x - 1, y - 1);
        return getCoordinates(root.right, arr, x + 1, y - 1);
    } else if (root.left && !root.right) {
        return getCoordinates(root.left, arr, x - 1, y);
    } else if (root.right && !root.left) {
        return getCoordinates(root.right, arr, x, y - 1);
    } else if (!root.left && !root.right) {
        return arr.push([x , y, root.val])
    }
}


/*
[
  [ -1, -1, 9 ],
  [ 0, -2, 15 ],
  [ 0, 0, 3 ],
  [ 1, -1, 20 ],
  [ 2, -2, 7 ]
]
*/
