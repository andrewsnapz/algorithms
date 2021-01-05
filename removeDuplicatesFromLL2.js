function deleteDuplicates(head) {
  if (!head) return head;
  let position = head;
  let obj = {};
  let removedDuplicateArr = [];

  while (position) {
    if (!obj[position.val]) obj[position.val] = 1;
    else obhj[position.val]++;
    position = position.next;
  }

  for (let key in obj) {
    if (obj[key] === 1) {
      removedDuplicateArr.push(parseInt(key));
    }
  }
  let newList;
  if (removedDuplicateArr.length) {
    newList = new ListNode(removedDuplicateArr[0], null);
    removedDuplicateArr.shift();
  }

  position = newList;
  while (removedDuplicateArr.length) {
    position.next = new ListNode(removedDuplicateArr.shift(), null);
    position = position.next;
  }

  console.log(newList);
}

// iterate through the linked list, keep count
// if anything is duplicated, delete all instances of that value
// create new list from remainder
// iterate through the linked list, keep count
// if anything is duplicated, delete all instances of that value
// create new list from remainder
