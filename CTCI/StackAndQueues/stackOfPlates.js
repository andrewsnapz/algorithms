/*
Imagine a (literal) stack of plates. If the stack gets too high, it might topple. 
Therefore, in real life, we would likely start a new stack when the previous stack exceeds some 
threshold. Implement a data structure SetOfStacks that mimics this. SetO-fStacks should be 
composed of several stacks and should create a new stack once the previous one exceeds capacity. 
SetOfStacks. push() and SetOfStacks. pop() should behave identically to a single stack 
(that is, pop () should return the same values as it would if there were just a single stack). 
*/

class StackOfPlates {
  constructor(threshold) {
    this.threshold = threshold;
    this.stacks = [];
    this.currStack = [];
    this.idxCurrStack = this.currStack.length - 1;
  }

  push(val) {
    this.currStack.push(val);
    if (this.currStack.length === this.threshold) {
      this.stacks.push(this.currStack);
      this.currStack = [];
    }
    return this.currStack;
  }

  pop() {
    if (!this.stacks.length) {
      return;
    }
    this.stacks[this.idxCurrStack].pop();
  }

  numOfStacks() {
    console.log(this.stacks);
    return this.stacks.length;
  }
}

const plate = new StackOfPlates(2);
console.log(plate.push(1));
console.log(plate.push(2));
console.log(plate.push(3));
console.log(plate.push(4));

// console.log(plate.numOfStacks());
console.log(plate.numOfStacks());
