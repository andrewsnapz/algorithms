// const singleNonDuplicate = nums => {
//     if (nums.length === 1) {
//         return nums[0];
//     }
//     let index1 = 0;
//     let index2 = index1 + 1;
//     while(index2 < nums.length) {
//         if (nums[index1] === nums[index2]) {
//             index1 += 2;
//             index2 = index1 + 1;
//         } else if (nums[index1] !== nums[index2]){
//             return nums[index1];
//         } 
//     }
//     return nums[nums.length - 1];
// };

const singleNonDuplicate = nums => {
    if (nums.length === 1) {
        return nums[0];
    }
    return bst(nums, nums[0], nums[nums.length - 1]);
};

const bst = (nums, start, end) => {
    const mid = Math.floor(nums.length / 2);
    console.log("this is the mid: ", mid)
    if (nums[mid] === nums[mid - 1]) {
        bst(nums, nums[0], nums[mid]);
        bst(nums, nums[mid + 1], nums[nums.length - 1]);
    } else if (nums[mid] === nums[mid + 1]) {
        bst(nums, nums[0], nums[mid - 1]);
        bst (nums, nums[mid], nums[nums.length - 1]);
    } else if (nums[mid] !== nums[mid + 1] && nums[mid] !== nums[mid - 1]) {
        return nums[mid];
    }
};

console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8])) //2
