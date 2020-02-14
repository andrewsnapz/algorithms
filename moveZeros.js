function moveZeros(nums) {
    let indexes = [];
    let count = 0;
    for (let i = 0; i < nums.length; i++) { 
        if (nums[i] === 0) {
            indexes.push(i);
        }
    }
    for (let i = 0; i < indexes.length; i++) { 
        nums.splice(indexes[i], 1);
        count = indexes.length;
        if (count !== 0) { 
            nums.push(0);
        }
    }
    return nums;
}


let example1 = [1,0,0,1]; 
console.log(moveZeros(example1)); //[1,1,0,0];
console.log(moveZeros([1,0,1])); //[1,1,0];