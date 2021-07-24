function MinStack() {
    this.stack = [];
}

MinStack.prototype.push = function(element) {
    this.stack.push(element);
    return this.stack;
}

MinStack.prototype.pop = function() {
    this.stack.pop();
    return this.stack;
}

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
} //get the top element

MinStack.prototype.getMin = function() {
    return Math.min(...this.stack);
} 

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   
minStack.pop();
minStack.top();    
minStack.getMin()