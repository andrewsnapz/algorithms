/*
 How would you design a stack which, in addition to push and pop, has a function min 
which returns the minimum element? Push, pop and min should all operate in 0(1) time. 
*/

class Stack {
  constructor() {
    this.stack = [];
    this.size = stack.length;

    this.min = [];
    this.currMin;
  }

  push(val) {
    if (this.currMin > val || !this.currMin) {
      this.currMin = val;
      this.min.push(val);
    }

    this.stack.push(val);
    return this.stack;
  }

  pop() {
    let answer = this.stack.pop();
    if (answer === this.currMin) {
      this.currMin = this.minStack.pop();
    }
    return answer;
  }

  min() {
    return this.currMin;
  }
}
