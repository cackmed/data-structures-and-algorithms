const mergedList = require('./ll-merge');
const { Linkedlist } = require('../linked-lists/linked-list');


describe('mergedList testing module', () => {
  describe('Merged List ', () => {
    const list1 = new Linkedlist;
    list1.insert('100');
    list1.insert('200');
    list1.insert('300');
    list1.insert('400');
    const list2 = new Linkedlist;
    list2.insert('600');
    list2.insert('700');
    list2.insert('800');
    list2.insert('900');


    it('merges 2 linked lists into one', () => {
      expect((mergedList(list1, list2)).toEqual(('300 || 200 || 400 || 100')));
          
    });
  });
});

