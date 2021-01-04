// this.val
// this.next

function mergeTwoLists(l1, l2) {
  if (!l1 && !l2) return l1;
  let mergedArr = [];
  let position = l1;
  while (position) {
    mergedArr.push(position.val);
    position = position.next;
  }

  position = l2;
  while (position) {
    mergedArr.push(position.val);
    position = position.next;
  }
  mergedArr.sort((a, b) => a - b);
  let mergedList = new ListNode(mergedArr.shift(), null);
  position = mergedList;

  while (mergedArr.length !== 0) {
    position.next = new ListNode(mergedArr.shift(), null);
    position = position.next;
  }
  return mergedList;
}

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
