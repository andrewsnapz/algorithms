/*
Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node. 
Note that the intersection is defined based on reference, not value. That is, if the kth 
node of the first linked list is the exact same node (by reference) as the jth node of the second 
linked list, then they are intersecting. 
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  addNode(val) {
    let n = this;
    let end = new Node(val);

    while (n.next !== null) {
      n = n.next;
    }
    n.next = end;
    return n;
  }

  getValues() {
    let n = this;
    let values = [];

    while (n.next !== null) {
      values.push(n.val);
      n = n.next;
    }
    return values;
  }
}

const intersection = (l1, l2) => {
  let set = listInSet(l1);

  while (l2) {
    if (set.has(l2)) return l2;
    l2 = l2.next;
  }

  return null;
};

const listInSet = (head) => {
  let set = new Set();
  while (head) {
    set.add(head);
    head = head.next;
  }
  return set;
};
