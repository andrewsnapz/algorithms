function minimumDistances(a) {
    let distanceArr = [];
    let left = 0;
    let right = a.length - 1;
    while (left < a.length) {
        const smallestDifference = right - left;
        if (left >= right) {
            left++;
            right = a.length - 1;
        }

        if (a[left] === a[right] && left !== right) {
            distanceArr.push(smallestDifference);
            right--;
        } else {
            right--;
        }
    }
    return Math.min(...distanceArr);
};

let input = [7,1,3,4,1,7];
console.log(minimumDistances(input)); // 3