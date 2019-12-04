const insertShiftArray = (arr) => {
  for(let i = 0; i < arr.length; i += 1) 
    arr[i] = arr[i + 1] || 8;
  console.log(arr);
};
const arr = [0, 1, 2, 3, 4, 5, 6, 7];
insertShiftArray(arr);

module.exports = {
  insertShiftArray
};
