const {
  binarySearch
} = require('./array-binary.js');
const arr = [4, 8, 15, 16, 23, 42];
describe('validator module', () => {
  describe('basic validation', () => {
    it('properly binanry searchs', () => {
      expect(binarySearch(arr, 23)).toEqual(4);
      expect(binarySearch(arr, 10)).toEqual(-1);
    });
  });
});

