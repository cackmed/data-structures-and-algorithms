class Dog {
  constructor(value) {
    this.value = value;  
    this.next = null;  }
}
class Cat {
  constructor(value) {
    this.value = value;  
    this.next = null;
  }
}




class AnimalQueue {
  constructor() {
    this.front = null;
    this.last = null;
  }
  enqueue(node) {
    if(!this.front) {

      this.front = node;
      this.last = node;
    } else {
      this.last.next = null;
      this.last = node;
    }
  }
  dequeue(pref) {
    if(!pref) {
      const queued = this.front.value;
      this.front = this.front.next;
      return queued;
    } else {
      let current = this.front;
      while(current.next.value != pref) {
        current = current.next;
        if(!current.next) {
          return ('tough luck');
        }
      }
      const found = current.next;
      current.next = found.next;
      return found;
    }
    
  }
}

module.exports = {
  AnimalQueue
};
