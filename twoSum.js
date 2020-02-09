function twoNumberSum(array, targetSum) { 
    let set = new Set();
    let pairArray = [];
    for (let i = 0; i < array.length; i++) {
        const num = targetSum - array[i];
        set.add(array[i]);
        if (set.has(num) && num !== array[i]) { 
            pairArray.push(array[i], num);
        }
    } 
    return pairArray;
}

// function twoNumberSum(array, targetSum) {
//     const nums = {};
//     for (const num of array) { 
//         const potentialMatch = targetSum - num;
//         if (potentialMatch in nums) { 
//             return [potentialMatch, num];
//         } else { 
//             nums[num] = true;
//         }
//     }
//     return [];
// }

let array = [3,5,-4,8,11,1,-1,6];
let array2 = [3,5,5,-4,8,11,1,-1,6];

console.log(twoNumberSum(array, 10));
console.log(twoNumberSum(array2, 10));