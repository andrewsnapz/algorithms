/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var isSameTree = function(p, q) {
    if (p.length !== q.length) { 
        return false;
    } else if (p.length === 0 && q.length === 0) {
        return true;
    } else if (p[0] !== q[0]) { 
        return false;
    }

    const leftOne = numbersSmallerThanNode(p);
    const leftTwo = numbersSmallerThanNode(q);
    const rightOne = numbersBiggerThanOrEqualToNode(p);
    const rightTwo = numbersBiggerThanOrEqualToNode(q);

    return isSameTree(leftOne, leftTwo) && isSameTree(rightOne, rightTwo);
};

function numbersSmallerThanNode(array) {
    let smallerArray = [];
    for (let i = 0; i < array.length; i++) { 
        if (array[0] > array[i]) {
            smallerArray.push(array[i]);
        }
    }
    return smallerArray;
}

function numbersBiggerThanOrEqualToNode(array) { 
    let biggerArray = [];
    for (let i = 0; i < array.length; i++) { 
        if (array[0] <= array[i]) { 
            biggerArray.push(array[i]);
        }
    }
    return biggerArray;
}

console.log(isSameTree([1,2,3], [1,2,3]));
let bst1 = [10, 15, 8, 12, 94, 81, 5, 2, 11];
// [15, 12, 94, 81, 11], [8, 5, 2];
// ([15, 94, 81], [12, 11]), ([5, 2]);

let bst2 = [10, 8, 5, 15, 2, 12, 11, 94, 81];
// [15, 12, 11, 94, 81], [8, 5, 2];
// ([15, 94, 81], [12, 11]), ([5, 2]);

console.log(isSameTree(bst1, bst2));

