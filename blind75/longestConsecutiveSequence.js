const longestConsecutive = (nums) => {
  let obj = removingDuplicates(nums);
  return countingLongestSequence(obj.arrFromSet, obj.set);
};

const removingDuplicates = (nums) => {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i])) set.add(nums[i]);
  }
  let obj = {
    set,
    arrFromSet: Array.from(set),
  };
  return obj;
};

const countingLongestSequence = (nums, set, longestSeq = 1, result = 1) => {
  console.log(`nums: ${nums}`);
  console.log(set);
  if (nums.length === 1) return result;
  let seqIdx = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[seqIdx] > nums[i]) seqIdx = i;
  }

  if (set.has(nums[seqIdx] + 1)) {
    nums.splice(seqIdx, 1);
    return longestConsecutive(nums, set, longestSeq + 1, result);
  } else {
    result = Math.max(result, longestSeq);
    nums.splice(seqIdx, 1);
    return longestConsecutive(nums, set, (longestSeq = 1), result);
  }
};

// console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4;
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
