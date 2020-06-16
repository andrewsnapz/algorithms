const searchRange = (nums, target, low = 0, high = nums.length - 1) => {
    if (nums.length === 1 && nums[0] === target) return [0,0];
    let mid = Math.floor((high + low) / 2);
    console.log(`the mid is ${mid}, low is ${low}, high is ${high}`)
    if (low === high && nums[low] !== target) return [-1, -1];
    const result = [];
    if (nums[mid] === target && nums[mid - 1] === target) {
        result.push(mid - 1, mid);
        return result;
    } else if (nums[mid] === target && nums[mid + 1] === target) {
        result.push(mid, mid + 1);
        return result;
    } else if (nums[mid] === target) {
        result.push(mid, mid);
        return result;
    }
    
    if (nums[mid] > target) return searchRange(nums, target, 0, mid - 1);
    if (nums[mid] < target) return searchRange(nums, target, mid, nums.length + 1);
    return [-1,-1];
};


// console.log(searchRange([5,7,7,8,8,10], 8));
// console.log(searchRange([5,7,7,8,8,10], 6));
// console.log(searchRange([2,2], 1));
// console.log(searchRange([1,2,3], 1));
console.log(searchRange([3,3,3], 3));