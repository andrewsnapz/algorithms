function majorityElement(nums) {
    let maxTimesElementAppears = nums.length / 2;
    console.log(maxTimesElementAppears);
    let cache = {};
    for (let i = 0; i < nums.length; i++) {
        if (!cache[nums[i]]) {
            cache[nums[i]] = 1;
        } else {
            cache[nums[i]] ++;
        }
    }
    for (let key in cache) {
        if (cache[key] > maxTimesElementAppears) {
            return key;
        }
    }
}

console.log(majorityElement([3,2,3]));