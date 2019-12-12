class Node {
  constructor(value) {
    this.value = value;  
    this.next = null; 
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
  }
  insert(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }
  includes(value){
    let current = this.head;

    while(current !== null) {
      if(current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  toString() {
    let string = '';
    let current = this.head;

    while(current !== null){
      if(current.next !== null){
        string += current.value;
      } else {
        string += current.value;
      }
      current = current.next;
    }
    return string;
  }
  append(value) {
    const node = new Node(value);
    let current = this.head;
    
    while(current !== null) {
      current = current.next;
    }
    current.next = node;
  }
  insertBefore(value, newValue) {
    const node = new Node(newValue);
    
    if(value === this.head.value) {
      node.next = this.head;
      return this.head = node;
    }
    let current = this.head;
    while(current.next.value !== value) {
      current = current.next;
    }
    node.next = current.next;
    current.next = node;
  }
  insertAfter(value, newValue) {
    const node = new Node(newValue);
    let current = this.head;
    while(current.value !== value) {
      current = current.next;
    }
    node.next = current.next;
    current.next = node;
  }
  delete(value) {
    let current = this.head;
    while(current.next.value !== value) {
      current = current.next;
    }
    current.next = current.next.next;
  }
}

module.exports = { Node, Linkedlist };
