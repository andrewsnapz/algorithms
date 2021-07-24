function isTreeSymmetric(t) {
//take the t.right and flip the branches around. Afterwards, check the branch and compare to the other branch.
if (t.left !== t.right) {
    return false;
}
if (checkingLeftBranch(t.left) === checkingRightBranch(t.right)) {
    return true;
} 
    return false;
}

function checkingRightBranch(branch) {
    let isBranchesFlipped = false;
    if (branch.left.value > branch.value && branch.right.value < branch.value) {
        checkingRightBranch(branch.left);
        checkingRightBranch(branch.right);
    } else if (branch.left.value > branch.value && !branch.right) {
        checkingRightBranch(branch.left);
    } else if (branch.right.value < branch.value && !branch.left) {
        checkingRightBranch(branch.right);
    } else if (!branch.left && !branch.right) {
        isBranchesFlipped = true;
    }
    return isBranchesFlipped;
}

function checkingLeftBranch(branch) {
    let isBranchesNormal = false;
    if (branch.right.value > branch.value && branch.left.value < branch.value) {
        checkingLeftBranch(branch.left);
        checkingLeftBranch(branch.right);
    } else if (branch.right.value > branch.value && !branch.left) {
        checkingLeftBranch(branch.right);
    } else if (branch.left.value < branch.value && !branch.right) {
        checkingLeftBranch(branch.left);
    } else if (!branch.right && !branch.left) {
        isBranchesNormal = true;
    }
    return isBranchesNormal;
}
