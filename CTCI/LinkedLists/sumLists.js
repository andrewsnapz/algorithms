/*
You have two numbers represented by a linked list, where each node contains a single 
digit. The digits are stored in reverse order, such that the 1 's digit is at the head of the list. Write a 
function that adds the two numbers and returns the sum as a linked list
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

// input: two linked lists
// output: single linked list with combined reverse sum
const sumLists = (l1, l2) => {
  let listOneValues = gatherValues(l1);
  let listTwoValues = gatherValues(l2);

  let sum =
    Number.parseInt(listOneValues.join("")) +
    Number.parseInt(listTwoValues.join(""));

  sum = sum.toString();

  let dummyHead = new Node(0);
  let pointer = dummyHead;
  let idx = 0;

  while (idx < sum.length) {
    pointer.next = new Node(Number.parseInt(sum[idx]));
    idx++;
    pointer = pointer.next;
  }

  return dummyHead.next;
};

const gatherValues = (head) => {
  let values = [];

  while (head) {
    values.unshift(head.val);
    head = head.next;
  }
  return values;
};

const list1 = new Node(7);
list1.addNode(1);
list1.addNode(6);

const list2 = new Node(5);
list2.addNode(9);
list2.addNode(2);

console.log(sumLists(list1, list2));
