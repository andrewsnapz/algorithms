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

let array = [8,5,2,9,5,6,3];
console.log(bubbleSort(array)); // [2,3,5,5,6,8,9]