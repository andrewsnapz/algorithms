class QueueTwoStacks {
    constructor() {
    this.inStack = [];
    this.outStack = [];
    }

    enqueue(item) {
        this.inStack.push(item);
    }
  
    dequeue() {
        if (this.outStack.length === 0) {
            while(this.inStack.length > 0) {
            const newestInStackItem = this.inStack.pop();
            this.outStack.push(newestInStackItem);
        }
    }
    if (this.outStack.length === 0) {
        throw new Error("Can't dequeue from empty queue!");
    }
    return this.outStack.pop();
    }
  }
