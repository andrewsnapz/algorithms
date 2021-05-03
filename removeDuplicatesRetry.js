const removeDuplicates = (nums) => {
  let idx1 = 0;
  let idx2 = 0;
  while (idx2 < nums.length) {
    if (nums[idx1] === nums[idx2]) {
      nums.splice(idx1, 1);
      idx1 = nums.indexOf(nums[idx2]);
      idx2 = idx1 + 1;
    } else {
      idx1++;
      idx2++;
    }
  }
  return nums.length;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// edit array in place
// return length of new array
