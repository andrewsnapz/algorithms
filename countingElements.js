function countElements(arr) {
    let set = new Set();
    let numCache = {};
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        set.add(arr[i]);
        if (!numCache[arr[i]]) {
            numCache[arr[i]] = 1;
        } else {
            numCache[arr[i]]++;
        }
    }
    let array = Array.from(set).sort((a,b) => a-b);
    for (let i = 0; i < array.length; i++) {
        if (array[i + 1] === array[i] + 1) {
            count += numCache[array[i]];
        }
    }
    return count;
}

let input = [1,3,2,3,5,0]; //3
let input2 = [1,1,2,2]; //2

console.log(countElements(input2));
