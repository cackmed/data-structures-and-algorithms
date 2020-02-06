class Stack {
  constructor(node = null) {
    this.top = node;
  }
  pop() {
    const popped = this.top.value;
    this.top = this.top.next;
    return popped;
  }
  push(node) {
    node.next = this.top;
    this.top = node; 
  }
  peek() {
    return this.top.value;
  }
}

class PsuedoQueue {
  constructor() {
    this.front = null;
    this.last = null;
  }
  enqueue(stack) {
    if(!this.front) {
      this.front = stack;
      this.last = stack;
    } else {
      this.last.next = null;
      this.last = stack;
    }
  }
  dequeue() {
    const queued = this.front.value;
    this.front = this.front.next;
    return queued;
  }
}

module.exports = {
  PsuedoQueue,
  Stack
};

