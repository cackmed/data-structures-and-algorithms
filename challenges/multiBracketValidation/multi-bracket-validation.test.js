const { bracketsValidator } = require('./multi-bracket-validation');


describe('bracketsValidator testing module', () => {
  describe('bracketsValidator', () => {
    const string = '[]';
    const newString = '{}';
    const otherString = '(';
    const otherOtherString = '{}(){}';	
    it('takes in a string and returns a boolean depending on whether the string contains a type of bracket', () => {
      expect(bracketsValidator(string).toEqual(true));
      expect(bracketsValidator(newString).toEqual(true));
      expect(bracketsValidator(otherOtherString).toEqual(true));
      expect(bracketsValidator(otherString).toEqual(false));
    });
  });
});
  
