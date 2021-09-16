const threeSum = (nums) => {
  if (nums.length < 3) return [];
  nums.sort((a, b) => a - b);

  let result = [];
  let set = new Set();

  for (let i = 0; i < nums.length; i++) {
    let pt1 = i + 1;
    let pt2 = nums.length - 1;

    while (pt1 < pt2) {
      let sum = nums[i] + nums[pt1] + nums[pt2];
      if (sum === 0) {
        set.add(`[${nums[i]}, ${nums[pt1]}, ${nums[pt2]}]`);
        pt1++;
        pt2--;
        continue;
      } else if (sum > 0) {
        pt2--;
      } else if (sum < 0) {
        pt1++;
      }
    }
  }
  set.forEach((el) => result.push(JSON.parse(el)));
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// [[-1,-1,2],[-1,0,1]]

console.log(threeSum([0, 0, 0, 0]));
// [[0, 0, 0]]

console.log(threeSum([-2, 0, 1, 1, 2]));
// [[-2,0,2], [-2,1,1]];
