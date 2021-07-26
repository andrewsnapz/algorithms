// https://leetcode.com/problems/summary-ranges

// first go over inputs and outputs
// input is sorted array, output is array with string values

// use two pointers, with one pointer being ahead of the other by one
// if the values at the pointers are +1 of each other, keep track of the value at pt1
// keep iteriating until the values are no longer +1 of each other
// pt2 will then be at the range
// insert range into output array, move pointers to the next elements

const summaryRanges = (nums) => {
  let rangeArr = [];
  let pt1 = 0;
  let pt2 = pt1 + 1;

  while (pt1 < nums.length) {
    if (nums[pt1] + 1 === nums[pt2]) {
      pt1++;
      pt2++;
    } else {
      insertRanges(nums.splice(0, pt2), rangeArr);
      pt1 = 0;
      pt2 = pt1 + 1;
    }
  }
  return rangeArr;
};

const insertRanges = (splicedArr, rangeArr) => {
  if (splicedArr.length > 1) {
    rangeArr.push(`${splicedArr[0]}->${splicedArr[splicedArr.length - 1]}`);
  } else {
    rangeArr.push(`${splicedArr[0]}`);
  }
  return rangeArr;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
// ["0->2", "4->5", "7"]

console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
// ["0","2->4","6","8->9"]
