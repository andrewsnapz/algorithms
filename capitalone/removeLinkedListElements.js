// https://leetcode.com/problems/remove-linked-list-elements

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// input: linkedlist, int
// output: linkedlist
// iteriate through the linkedlist, if val matches, delete the node

const removeElements = (head, val) => {
  if (!head) return head;

  while (head && head.val === val) {
    head = head.next;
  }

  if (head !== null) {
    let curr = head.next;
    let prev = head;

    while (curr) {
      if (curr.val === val) {
        prev.next = curr.next;
      } else {
        prev = curr;
      }
      curr = curr.next;
    }
  }
  return head;
};
