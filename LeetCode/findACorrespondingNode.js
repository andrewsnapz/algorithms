// this.left, this.right, this.val

// const getTargetCopy = (original, copy, target) => {
//   return transverseCopy(copy, target);
// };

// const transverseCopy = (copy, target) => {
//     if (copy.val === target.val) return copy;

//     if (copy.left && copy.right) {
//         transverseCopy(copy.left, target);
//         return transverseCopy(copy.right, target);
//     } else if (copy.left && !copy.right) {
//         return transverseCopy(copy.left, target);
//     } else if (copy.right && !copy.left) {
//         return transverseCopy(copy.right, target);
//     }
// };

var getTargetCopy = function(original, cloned, target) {
    if (!cloned) return null;
    if (cloned.val === target.val) return cloned;
    return (
        getTargetCopy(original, cloned.left, target) || getTargetCopy(original, cloned.right, target)
    )
};
