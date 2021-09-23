const canJump = (nums) => {
  // input: array of nums
  // output: boolean

  // using recursion to test every possible combination to reach the end
  return idxChecking(nums);
};

const idxChecking = (nums, pointer = 0) => {
  let lastIdx = nums.length - 1;

  if (pointer >= lastIdx) return true;
  //   if (nums[pointer] === 0 && pointer !== lastIdx) return false;

  while (pointer < nums.length) {}

  //   for (let i = 1; i < nums[currIdx] + 1; i++) {
  //     console.log(i);
  //     return idxChecking(nums, (currIdx = i));
  //   }
  return false;
};

console.log(canJump([2, 3, 1, 1, 4])); // true
// console.log(canJump([3, 2, 1, 0, 4])); // false
