// https://leetcode.com/problems/merge-two-sorted-lists

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const mergeTwoLists = (l1, l2) => {
  if (!l1 && l2) return l2;
  if (l1 && !l2) return l1;
  if (!l1 && !l2) return l1;
};
