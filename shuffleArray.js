let Solution = function (nums) {
  this.originalSet = nums;
  this.numSet = this.originalSet;
//   return this.numSet;
};

Solution.prototype.reset = function () {
    console.log('inside this function')
  return this.originalSet;
};

Solution.prototype.shuffle = function () {
  for (let i = this.numSet.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = this.numSet[i];
    this.numSet[i] = this.numSet[j];
    this.numSet[j] = temp;
  }
  return this.numSet;
};

const set = new Solution([1, 2, 3]);
console.log(set);
console.log(set.reset());
console.log(set.shuffle());
