const containsDuplicate = nums => {
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (!set.has(nums[i])) {
            set.add(nums[i]);
        } else if (set.has(nums[i])) {
            return true;
        }
    }
    return false;
}