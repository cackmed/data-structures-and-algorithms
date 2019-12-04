import insertShiftArray from './array-shift.js';
const arr = [0, 1, 2, 3, 4, 5, 6, 7];
const newArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
describe('array shifting testing module', () => {
  describe('array-shifting', () => {
    it('properly tells if the function inserted 8 into a existing array without deleting anything', () => {
      expect(insertShiftArray(arr).toEqual(newArr));
        
    });
  });
});

