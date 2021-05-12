var mergeKLists = function (lists) {
  let sortedArr = [];
  for (let i = 0; i < lists.length; i++) {
    sortedArr = gatherValues(lists[i], sortedArr);
  }

  if (sortedArr.length === 0) return null;
  return newList(sortedArr);
};

const gatherValues = (linkedList, sortedArr) => {
  let pointer = linkedList;
  while (pointer) {
    sortedArr.push(pointer.val);
    pointer = pointer.next;
  }
  return sortedArr.sort((a, b) => a - b);
};

const newList = (sortedArr) => {
  let newList = new ListNode(sortedArr[0], null);
  let pointer = newList;
  let idx = 1;
  while (idx < sortedArr.length) {
    pointer.next = new ListNode(sortedArr[idx], null);
    pointer = pointer.next;
    idx++;
  }
  return newList;
};
