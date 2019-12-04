const {
  insertShiftArray
} = require('./array-shift.js');

describe('array shifting testing module', () => {
  describe('array-shifting', () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7];
    const newArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    console.log(newArr);
    it('properly tells if the function inserted 8 into a existing array without deleting anything', () => {
      expect(insertShiftArray(arr).toEqual(newArr));
        
    });
  });
});

