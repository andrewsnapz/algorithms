/*
Return Kth to Last: Implement an algorithm to find the 
kth to last element of a singly linked list.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  addNode(val) {
    let end = new Node(val);
    let n = this;

    while (n.next !== null) {
      n = n.next;
    }
    n.next = end;
  }
}

const kthToLast = (head, k) => {
  let count = getSizeMinusK(head, k);
  let pt = head;

  while (count !== 0) {
    pt = pt.next;
    count--;
  }

  return pt;
};

const getSizeMinusK = (head, k) => {
  let pt = head;
  let size = 0;

  while (pt) {
    size++;
    pt = pt.next;
  }
  return size - k;
};

const list = new Node(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);
list.addNode(5);

console.log(list);
// console.log(getSizeMinusK(list, 2)); // 4

console.log(kthToLast(list, 2));
