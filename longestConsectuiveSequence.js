// var longestConsecutive = function (nums) {
//   let set = new Set(nums);
//   let longestCount = 0;

//   for (let i = 0; i < nums.length; i++) {
//     let curr = nums[i];
//     if (set.has(curr + 1)) count++;
//     else {
//       longestCount = Math.max(longestCount, count);
//       count = 0;
//     }
//   }
//   return longestCount;
// };

var longestConsecutive = function (nums) {
  const numSet = new Set(nums);
  let maxLen = 0;

  for (let n of numSet) {
    if (numSet.has(n - 1)) continue;
    let len = 1;
    while (numSet.has(n + len)) len++;
    maxLen = Math.max(maxLen, len);
  }
  return maxLen;
};
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
