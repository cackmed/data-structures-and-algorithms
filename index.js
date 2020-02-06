const string = '[]';
const newString = '{}';
const otherString = '(';
const otherOtherString = '{}(){}';
const string1 = '(kopdskd)';	

const regex = /[(].*[)]/;

console.log(regex.test(string1));
console.log(regex.test(newString));
console.log(regex.test(otherString));
console.log(regex.test(otherOtherString));
console.log(regex.test(string));
