const insertShiftArray = (arr) => {
    for(let i = 0; i < arr.length; i += 1) 
        arr[i] = arr[i + 1] || 8;
};
export default insertShiftArray;