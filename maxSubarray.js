function maxSubArray(nums) {
    let curSum = nums[0];
    let maxSum = curSum;
    for (let i = 1; i < nums.length; i++) {
        curSum += nums[i];
        if (nums[i] > curSum) {
            curSum = nums[i];
        }
        if (curSum > maxSum) {
            maxSum = curSum;
        }
    }
    return maxSum;
}

let input = [-2,1,-3,4,-1,2,1,-5,4]; //6
console.log(maxSubArray(input));