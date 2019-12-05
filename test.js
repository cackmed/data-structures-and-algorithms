const array = [4, 8, 15, 16, 23, 42];

const binarySearch = (arr, x) => {
  let start = 0, end = arr.length - 1;
  while(start <= end) {
    let mid = (start + end) / 2; 

    if(arr[mid] === x)  return [mid];
    else if(arr[mid] < x)
      start = mid + 1;
    else end = mid - 1;
  }
  return -1;
};
binarySearch(array, 23);
