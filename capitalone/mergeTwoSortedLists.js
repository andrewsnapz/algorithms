// https://leetcode.com/problems/merge-two-sorted-lists
// https://github.com/krishnadey30/LeetCode-Questions-CompanyWise/blob/master/capital-one_alltime.csv

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const merge = (l1, l2) => {
  if (!l1) return l2;
  if (!l2) return l1;

  let list = new ListNode();
  let pointer = list;

  while (l1 & l2) {
    if (l1.val <= l2.val) {
      list.next = l1;
      l1 = l1.next;
    } else {
      list.next = l2;
      l2 = l2.next;
    }
    list = list.next;
  }

  list.next = l1 || l2;
  return pointer.next;

  // T.C: O(N) where N = the shortest list;
  // S.C: O(N + M);
};
