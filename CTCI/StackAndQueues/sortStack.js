/*
 Write a program to sort a stack such that the smallest items are on the top. You can use 
an additional temporary stack, but you may not copy the elements into any other data structure 
(such as an array). The stack supports the following operations: push, pop, peek, and is Empty. 
*/

class SortStack {
  constructor() {
    this.sortStack = [];
    this.tempStack = [];
  }

  pop() {}

  push(val) {
    while (this.sortStack.length > 0) {
      let temp = this.sortStack[this.sortStack.length - 1];
      this.sortStack.pop();

      while (
        this.tempStack.length > 0 &&
        this.tempStack[this.tempStack.lemgth - 1] > temp
      ) {
        this.sortStack.push(this.tempStack.pop());
      }

      this.tempStack.push(temp);
    }
    return this.tempStack;
  }

  peek() {}

  isEmpty() {}
}

// [2,1,3]
