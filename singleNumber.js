function singleNumber(nums) {
    let set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (!set.has(nums[i])) {
            set.add(nums[i]);
        } else if (set.has(nums[i])) {
            set.delete(nums[i]);
        }
    }

    let iterator = set.values();
    console.log(iterator)
    return iterator.next().value;
}

console.log(singleNumber([4,1,2,1,2]))