// https://leetcode.com/problems/odd-even-linked-list

// input linkedList
// output linkedList
// without worrying about time complexity/space complexity:
// store each node in a oddArr or evenArr

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const oddEvenList = (head) => {
  if (!head) return null;

  let dummyHeadOdd = new ListNode();
  let dummyHeadEven = new ListNode();
  let currOdd = dummyHeadOdd;
  let currEven = dummyHeadEven;

  let curr = head;
  let idx = 1;

  while (cur !== null) {
    if (idx % 2 === 1) {
      currOdd.next = curr;
      currOdd = curOdd.next;
    } else {
      currEven.next = curr;
      currEven = currEven.next;
    }
    curr = curr.next;
    idx++;
  }
  currEven.next = null;
  currOdd.next = dummyHeadEven.next;
  return dummyHeadOdd.next;

  // T.C.: O(N)
  // S.C.: O(1)
};
