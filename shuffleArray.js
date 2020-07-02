let Solution = function(nums) {
    this.originalSet = nums;
    this.numSet = this.originalSet;
    return this.numSet;
};

Solution.prototype.reset = function() {
    return this.originalSet;
};

Solution.prototype.shuffle = function() {

};

const set = new Solution([1,2,3]);
console.log(set);
console.log(set.reset);
console.log(set.shuffle);