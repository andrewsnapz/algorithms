var search = function(nums, target) {
    let startIdx = 0;
    let endIdx = nums.length - 1;
    let halfIdx = Math.floor((endIdx - startIdx) / 2);



};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // return 4
console.log(search([2, 4, 5, 6, 7, 0, 1], 0)); // return 5
console.log(search([1, 2, 4, 5, 6, 7, 0], 0)); // return 6
console.log(search([7, 0, 1, 2, 4, 5, 6], 0)); // return 6