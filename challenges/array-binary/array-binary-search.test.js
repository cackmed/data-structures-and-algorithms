const binarySearch = require('./array-binary');
  
describe('Array Binary Search testing module', () => {
  describe('Searches an array via a Binary Search method and then reutrns either the number index location or -1 to indicate that the array does not peocess said item', () => {
    const arr = [0, 4, 9, 13, 17, 20, 23, 27];
    it('properly tells if the function inserted 8 into a existing array without deleting anything', () => {
      expect(binarySearch(arr, 9).toEqual(2));
      expect(binarySearch(arr, 11).toEqual(-1));
    });
  });
});

