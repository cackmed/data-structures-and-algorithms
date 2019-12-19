class Node {
  constructor(value) {
    this.value = value;  
    this.next = null; 
  }
}


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
  isEmpty() {
    return this.top === null;
  }
}

class Queue {
  constructor(node = null) {
    this.front = node;
    this.last = node;
  }
  enqueue(node) {
    node.next = this.last;
    this.last = node;
  }
  dequeue() {
    if(!this.front) return null;
    
    const front = this.front;
    this.front = this.front.next;
    if(!this.front) this.back = null;

    return front;
  }
  peek() {
    return this.front.value;
  }
  isEmpty() {
    return this.front === null;
  }
}

module.exports = { Node, Stack, Queue };
