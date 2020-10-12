// function isValidBST(root) {
//     if (!root) return false;
//     return checkingBST(root);
// };

// function checkingBST(root) {
//     if (root.left && root.right && root.left.val < root.right.val) {
//         checkingBST(root.left);
//         return checkingBST(root.right);
//     } else if (root.left && !root.right) {
//         return checkingBST(root.left);
//     } else if (root.right && !root.left) {
//         return checkingBST(root.right);
//     } else if (!root.right && !root.left) {
//         return true;
//     }
//     return false;
// }

function isValidBST(root) {
    if (!root) return true;
    return checkingBST(root);
}

function checkingBST(root) {
    if (root.left && root.right) {
        if (root.left.val < root.val && root.right.val > root.val) {
            checkingBST(root.left);
            return checkingBST(root.right);
    } else return false;

    } else if (!root.left && root.right) {
        if (root.right.val > root.val) return checkingBST(root.right);
        else return false;

    } else if (!root.right && root.left) {
        if (root.left.val < root.val) return checkingBST(root.left);
        else return false;

    } else if (!root.right && !root.left) {
        return true;
    }
}

// need to compare it to the root node val;
