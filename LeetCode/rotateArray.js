// modify nums in place

// function rotate(nums, k) {
//     if (!nums) return nums;
//     // let removedArr = nums.splice(nums.length - k, k);
//     // return removedArr.concat(nums);
//     return nums.splice(nums.length - k, k).concat(nums);
// };

function rotate(nums, k) {
  while (k !== 0) {
    nums.unshift(nums.pop());
    k = k - 1;
  }
  console.log(nums);
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); // [5,6,7,1,2,3,4]
console.log(rotate([-1, -100, 3, 99], 2));
