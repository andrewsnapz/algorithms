var findDisappearedNumbers = function(nums) {
    let count = 1;
    let array = [];
    while (count < nums.length + 1) {
        if (!nums.includes(count)) {
            array.push(count);
            count++;
        } else {
            count++;
        }
    }
    return array;
 };

let input = [4,3,2,7,8,2,3,1];
//output = [5,6];
console.log(findDisappearedNumbers(input));
console.log(findDisappearedNumbers([1, 1])); // [2]