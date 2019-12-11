class Node {
  constructor(value, next = null) {
    this.value = value;  
    this.next = next; 
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insert(value) {
    this.head = new Node(value, this.head);
    this.size++;
  }

  append(value) {
    let node = new Node(value);
    let current;

    if(!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while(current.next) {
        current = current.next;
      }
      current.next = node; 
    }
    this.size++;
  }
  getAt(index) {
    let current = this.head;
    let count = 0;

    while(current) {
      if(count === index) {
        console.log(current.value);
      }
      count++;
      current = current.next;
    }

    return null;
  }

  removeAtIndex(index) {

    if(index > 0 && this.size) {
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;

    if(index === 0) {
      this.head = current.next;
    } else {
      while(count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }

  insertAtIndex(value, index) {
    if(index > 0 && index > this.size) {
      return;
    }
    if(index === 0) {
      this.insert(value);
      return;
    }
    const node = new Node(value);
    let current, previous;
    
    current = this.head;
    let count = 0;
    while(count < index) {
      previous = current;
      count++;
      current = current.next;
    }
    node.next = current;
    previous.next = node;

    this.size++;
  }
  toString() {
    let current = this.head;

    console.log(current.value);
    current = current.next;
  }
  clearList() {
    this.head = null;
    this.size = 0;
  }
}
const list = new Linkedlist;
list.printListValue();
