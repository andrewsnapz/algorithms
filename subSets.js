// function subsets(nums, set = new Set()) {
//     if (!set.has(JSON.stringify(nums))) set.add(JSON.stringify(nums));
//     for (let i = 0; i < nums.length; i++) {
//         let newArr = nums.slice(0, i).concat(nums.slice(i + 1));
//         subsets(newArr, set);
//     }
//     return Array.from(set, JSON.parse);
// };

function subsets(nums, outputArr = []) {
    outputArr.push(nums);
    for (let i = 0; i < nums.length; i++) {
        let newArr = nums.slice(0, i).concat(nums.slice(i + 1));
        subsets(newArr, outputArr);
    }
    let set = new Set(outputArr.map(JSON.stringify));
    let output = Array.from(set).map(JSON.parse);
    return output;
};

// console.log(subsets([1,2,3]));
// console.log(subsets([1,2,3,4,5,6,7,8,9]));
console.log(subsets([1,2,3,4,5,6,7,8,10,0]));