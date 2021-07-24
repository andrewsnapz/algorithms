var merge = function (nums1, m, nums2, n) {
  while (n > 0) {
    nums1.pop();
    n = n - 1;
  }
  for (let i = 0; i < nums2.length; i++) {
    nums1.push(nums2[i]);
  }

  return nums1.sort((a, b) => a - b);
};
