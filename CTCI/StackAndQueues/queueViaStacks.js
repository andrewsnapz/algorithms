/*
  Implement a MyQueue class which implements a queue using two stacks. 
*/

// Queue: FIFO: first in first out
// Stack: LIFO: last in, first out

class MyQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enQueue(val) {
    while (this.stack1.length !== 0) {
      this.stack2.push(this.stack1.pop());
    }

    this.stack1.push(val);

    while (this.stack2.length !== 0) {
      this.stack1.push(this.stack2.pop());
    }
  }

  deQueue() {
    if (this.stack1.length === 0) {
      return;
      // checks if stack1 is empty
    }

    let x = this.stack1[this.stack1.length - 1];
    this.stack1.pop();
    return x;
  }
}
