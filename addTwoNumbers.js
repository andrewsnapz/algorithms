/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let l1Sum = gatherListSum(l1);
  let l2Sum = gatherListSum(l2);
  console.log(`l1Sum: ${l1Sum}`);
  console.log(`l2Sum: ${l2Sum}`);
  let sumOfLists = l1Sum + l2Sum;

  return createSumList(sumOfLists.toString().split("").reverse());
};

// transverse both list, gather vals and store them in an array;
// array.reverse().join(); Need to check if it works for nums
// that or unshift
// add the values from l1 and l2
// reverse the sum from l1 and l2, create a new list

const gatherListSum = (list, sumArr = []) => {
  let pointer = list;
  while (pointer) {
    sumArr.unshift(pointer.val);
    pointer = pointer.next;
  }
  console.log(`sumArr.join: ${Number.parseFloat(sumArr.join("")).toFixed()}`);

  return Number.parseInt(sumArr.join(""));
};

const createSumList = (sumOfLists) => {
  let sumList = new ListNode(Number.parseInt(sumOfLists[0]), null);
  console.log(sumList);
  let idx = 1;
  let pointer = sumList;
  while (idx < sumOfLists.length) {
    pointer.next = new ListNode(Number.parseInt(sumOfLists[idx]), null);
    idx++;
    pointer = pointer.next;
  }
  console.log(sumList);
  return sumList;
};
