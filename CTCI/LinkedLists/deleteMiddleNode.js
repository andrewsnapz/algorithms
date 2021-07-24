/*
Delete Middle Node: Implement an algorithm to delete a node in the middle 
(i.e., any node but the first and last node, not necessarily the exact 
middle) of a singly linked list, given only access to that node. 
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

const deleteMiddleNode = (head) => {
  let halfPt = getSize(head) / 2;
  let prev = head;
  let curr = head.next;

  while (halfPt - 1 > 0) {
    prev = prev.next;
    curr = curr.next;
    halfPt--;
  }

  console.log(prev);

  let currNext = curr.next;
  prev.next = currNext;

  return head;
};

const getSize = (head) => {
  let pt = head;
  let size = 0;

  while (pt) {
    size++;
    pt = pt.next;
  }
  return size;
};

const list = new Node(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);
list.addNode(5);
list.addNode(6);

console.log(deleteMiddleNode(list));
