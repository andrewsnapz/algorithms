const removeDuplicates = nums => {
    let index1 = 0;
    let index2 = index1 + 1;

    while(index2 !== nums.length) {
        if (nums[index1] === nums[index2]) {
            nums.splice(index1, 1);
            index1 = nums.indexOf(nums[index2]);
            index2 = index1 + 1;
        } else {
            index1++;
            index2++;
        }
    }
    return nums.length;
}

// var removeDuplicates = function(nums) {
//     let movingIndex = 0;
//     for(let i = 1; i < nums.length; i++) {
//         if (nums[movingIndex] === nums[i]) { continue; }
//         movingIndex++
//         nums[movingIndex] = nums[i];
//     }
//     return movingIndex + 1;
// };

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
console.log(removeDuplicates([1,1,2]));