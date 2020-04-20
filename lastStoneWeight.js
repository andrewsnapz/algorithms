function lastStoneWeight(stones) {
    // if the array has 1 element or 0, return it:
    if (stones.length === 1) {
        return stones[0];
    } else if (stones.length === 0) {
        return 0;
    }
    // sort the array: 
    let sortedStones = stones.sort((a,b) => a - b);
    
    // define variables for the two biggest lengths:
    let highestNum = sortedStones[sortedStones.length - 1];
    let secondHighestNum = sortedStones[sortedStones.length - 2];
    let subtractedValue = highestNum - secondHighestNum;

    //pop the sorted array twice and add the subtracted value to the array:
    sortedStones.pop();
    sortedStones.pop();
    sortedStones.push(subtractedValue);

    return lastStoneWeight(sortedStones);
}

let array =  [2,7,4,1,8,1];
console.log(lastStoneWeight(array)); // should return 1;

// integrating using a heap?