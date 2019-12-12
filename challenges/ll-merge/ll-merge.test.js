const mergedList = require('./ll-merge');

describe('mergedList testing module', () => {
  describe('Merged List ', () => {
    const list1 = ('300 || 200 || 400 || 100');
    const list2 = ('600 || 700 || 800 || 900');
    it('merges 2 linked lists into one', () => {
      expect((mergedList(list1, list2)).toEqual(('300 || 200 || 400 || 100')));
          
    });
  });
});

