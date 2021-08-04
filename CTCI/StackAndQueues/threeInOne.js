/*
    Describe how you could use a single array to implement three stacks
*/

class MultiStack {
  constructor(capacity) {
    this.stack = [];
    this._stackCapacity = capacity; // maximum number of elements that fit into one stack
    this.values = []; // array which contains all elements in the three stacks
    this.sizes = [2, 3, 4]; // array with three indices, each representing the current number of elements in the respected stacks
    this.numberOfStacks = 3;
  }

  getStackCapacity() {}
  push(stackNumber, value) {} // pushes the number to the respected stack
  pop(stackNumber) {}
  peek(stackNumber) {}
  isEmpty(stackNumber) {}
  isFull(stackNumber) {}
  indexOfTop(stackNumber) {} // helper method which returns the index, in the values array, of the top element in the repsected stack
}
