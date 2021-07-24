// var mergeKLists = function (lists) {
//   let sortedArr = [];
//   for (let i = 0; i < lists.length; i++) {
//     sortedArr = gatherValues(lists[i], sortedArr);
//   }

//   if (sortedArr.length === 0) return null;
//   return newList(sortedArr);
// };

// const gatherValues = (linkedList, sortedArr) => {
//   let pointer = linkedList;
//   while (pointer) {
//     sortedArr.push(pointer.val);
//     pointer = pointer.next;
//   }
//   return sortedArr.sort((a, b) => a - b);
// };

// const newList = (sortedArr) => {
//   let newList = new ListNode(sortedArr[0], null);
//   let pointer = newList;
//   let idx = 1;
//   while (idx < sortedArr.length) {
//     pointer.next = new ListNode(sortedArr[idx], null);
//     pointer = pointer.next;
//     idx++;
//   }
//   return newList;
// };

var mergeKLists = function (lists) {
  let nums = [];
  for (let i = 0; i < lists.length; i++) {
    let c = lists[i];
    while (c) {
      nums.push(c.val);
      c = c.next;
    }
  }
  nums.sort((a, b) => a - b);
  let root = new ListNode();
  let c = root;
  for (let i = 0; i < nums.length; i++) {
    c.next = new ListNode(nums[i]);
    c = c.next;
  }
  return root.next;
};