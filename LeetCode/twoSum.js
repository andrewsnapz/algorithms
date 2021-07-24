function twoNumberSum(array, targetSum) {
  let set = new Set();
  let pairArray = [];
  for (let i = 0; i < array.length; i++) {
    const num = targetSum - array[i];
    set.add(array[i]);
    if (set.has(num) && num !== array[i]) {
      pairArray.push(array[i], num);
    }
  }
  return pairArray;
}

var twoSum = function (nums, target) {
  let set = new Set();
  let pair = [];

  for (let i = 0; i < nums.length; i++) {
    const value = target - nums[i];
    set.add(nums[i]);
    if (set.has(value) && value !== nums[i]) {
      pair.push(nums[i], value);
    }
  }
  return pair;
};

let array = [3, 5, -4, 8, 11, 1, -1, 6];
let array2 = [3, 5, 5, -4, 8, 11, 1, -1, 6];

console.log(twoNumberSum(array, 10));
console.log(twoNumberSum(array2, 10));
console.log(twoSum(array, 10));
console.log(twoSum(array2, 10));
