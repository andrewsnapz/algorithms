function bubbleSort(unsortedArray, swappedElement = false) {
  for (let i = 0; i < unsortedArray.length; i++) {
    for (let j = i + 1; j < unsortedArray.length; j++) {
      if (unsortedArray[i] > unsortedArray[j]) {
        swappedElement = true;
        let copyOfFirst = unsortedArray[i];
        let copyOfSecond = unsortedArray[j];
        unsortedArray[i] = copyOfSecond;
        unsortedArray[j] = copyOfFirst;
      }
    }
    if (swappedElement === false) {
      return unsortedArray;
    }
  }
  return bubbleSort(unsortedArray);
}

let array = [8, 5, 2, 9, 5, 6, 3];
console.log(bubbleSort(array)); // [2,3,5,5,6,8,9]

// function countSwaps(a, swapCount = 0, swap = false) {
//   for (let i = 0; i < a.length; i++) {
//     for (let x = i + 1; x < a.length; x++) {
//       if (a[i] > a[x]) {
//         let copyOfI = a[i];
//         a[i] = a[x];
//         a[x] = copyOfI;
//         swapCount++;
//         swap = true;
//       }
//     }
//   }
//   if (swap === false) {
//     return `Array is sorted in ${swapCount} swaps \n
//         First Element: ${a[0]} \n
//         Last Element: ${a[a.length - 1]}`;
//   }
//   return countSwaps(a, swapCount, (swap = false));
// }

console.log(countSwaps([3, 2, 1]));
