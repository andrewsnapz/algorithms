const duplicateZeros = arr => {
    let pointer = 0;
    while(pointer < arr.length) {
        if (arr[pointer] === 0) {
            arr.splice(pointer, 0, 0);
            arr.pop();
            pointer += 2;
        } else {
            pointer++;
        }
    };
    console.log(arr)
};

console.log(duplicateZeros([1,0,2,3,0,4,5,0])); //[1,0,0,2,3,0,0,4]