export const reverseArray = (arr) => {
    for(let i = 0; i <= Math.floor((arr.length - 1) / 2); i++) {
        let index = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = index;
    }
    return arr;
};


