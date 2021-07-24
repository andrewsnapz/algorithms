function getProductsOfAllIntsExpectAtIndex(intArray, index = 0, productArr = []) {
    let updatedIndex = index + 1;
    let leftPointer = 0;
    let rightPointer = intArray.length - 1;

    if (index === intArray.length) { 
        return productArr;
    }

    while (leftPointer !== index && rightPointer !== index) {
        let product = 1;
        if (leftPointer !== index) {
            product = intArray[leftPointer] * product;
            leftPointer++;
        } else if (rightPointer !== index) {
            product = intArray[rightPointer] * product;
            rightPointer--;
        } else if ((leftPointer === index && rightPointer !== index) || (leftPointer !== index && rightPointer === index)) {
            continue;
         } else { 
             productArr.push(product);
         }
    }

    return getProductsOfAllIntsExpectAtIndex(intArray, updatedIndex, productArr);
}

//cannot use division

// [1, 7, 3, 4]
// [84, 12, 28, 21]

console.log(getProductsOfAllIntsExpectAtIndex([1,7,3,4]));