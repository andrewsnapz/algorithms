const searchSortedArray = (arr, val) => {
  let startingIdx = 0;
  let endingIdx = arr.length - 1;
  let halfIdx = Math.floor((endingIdx - startingIdx) / 2);
  console.log(halfIdx)

  if (arr[halfIdx] === val) {
    return halfIdx;
  } else if (arr[halfIdx] > val) {
    return searchSortedArray(arr.slice(0, halfIdx), val);
  } else if (arr[halfIdx + 1] < val) {
    return searchSortedArray(arr.slice(halfIdx + 1, arr.length), val);
  }
};

console.log(searchSortedArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 7)); // return index of element: 6
