const array = [4, 8, 15, 16, 23, 42];

function binarySearch(arr, x) {
  let start = 0, end = arr.length - 1;
  while(start <= end) {
    let mid = Math.floor((start + end) / 2); 
    if(arr[mid] === x)  return console.log([mid]);
    else if(arr[mid] < x)
      start = mid + 1;
    else 
      end = mid - 1;
  }
  return console.log(-1);
}

binarySearch(array, 23);
