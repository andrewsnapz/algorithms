const rangeSumBST = (root,L,R) => {
    if (L > root.val && R > root.val) {
        return sumFunction(root.right,L,R);
    } else if (L < root.val && R < root.val) {
        return sumFunciton(root.left,L,R);
    } else {
        let sum1 = sumFunction(root.left,L,R);
        let sum2 = sumFunction(root.right,L,R);
        return sum1 + sum2;
    }
};

const sumFunction = (branch,L,R,sum=0) => {
    console.log(sum)
    if (branch.val >= L && branch.val <=R) {
        sum += branch.val
    }
    
    if (branch.right && branch.left) {
        sumFunction(branch.right,L,R,sum);
        return sumFunction(branch.left,L,R,sum);
    } else if (branch.right && !branch.left) {
        return sumFunction(branch.right,L,R,sum);
    } else if (!branch.right && branch.left) {
        return sumFunction(branch.left,L,R,sum);
    } else if (!branch.left && !branch.right) {
        return sum;
    }
};