const { Node, Linkedlist } = require('./linked-list');


describe('Node module', () => {
  let node;

  beforeEach(() => {
    node = new Node('100');
  });

  it('node has a value', () => {
    expect(node.value).toEqual('100');
  });
});

describe('Linked List Test Module', () => {
  let list;

  beforeEach(() => {
    list = new Linkedlist('100');
  });

  const data = () => {
    list.insert('100');
    list.insert('200');
    list.insert('300');
  };

  const newData = () => {
    list.insert('100');
    list.insert('200');
    list.insert('300');
    list.insert('400');
    list.insert('500');
    list.insert('600');
    list.insert('700');
    list.insert('800');
    list.insert('900');
  };

  it('linked list has a head', () => {
    expect(list.head).toEqual(null);
  });

  it('the insert method can put node at begining of the list', () => {
    list.insert('400');
    expect(list.head.value).toEqual('400');
  });

  it('can check if a list includes a value with the inclues method', () => {
    data();
    expect(list.includes('100')).toEqual(true);
    expect(list.includes('200')).toEqual(true);
    expect(list.includes('300')).toEqual(true);
    expect(list.includes('900')).toEqual(false);
  });

  it('returns a string of values within the list with toString', () => {
    data();
    expect(list.toString()).toEqual('300 || 200 || 100');
  });

  it('adds a node to the end of the list with append', () => {
    data(); 
    list.append('400');
    expect(list.toString()).toEqual('300 || 200 || 100 || 400');
  });

  it('inserts a node before a specified node value with insertBefore', () => {
    data();
    list.insertBefore('200', '400');
    expect(list.toString()).toEqual('300 || 400 || 200 || 100');
  });

  it('inserts a node after a specified node value with insertAfter()', () => {
    data();
    list.insertAfter('200', '400');
    expect(list.toString()).toEqual('300 || 200 || 400 || 100');
  });

  it('can delete a specified node with delete', () => {
    data();
    list.delete('200');
    expect(list.toString()).toEqual('300 || 100');
  });
  it('returns the kth number from the end', () => {
    newData();
    expect(list.kthFromEnd(4)).toEqual('500');
    expect(list.kthFromEnd(11)).toEqual('Chosen number is to high, please choose a lower number.');
    expect(list.kthFromEnd(-3)).toEqual('Please input a positive number');


  });
});

