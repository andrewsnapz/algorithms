class Node {
  constructor(val) {
    this.val = !val ? 0 : val;
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

    while (n) {
      values.push(n.val);
      n = n.next;
    }
    return values;
  }
}

/*
Write code to partition a linked list around a value x, such that all nodes less than x 
come before all nodes greater than or equal to x. If x is contained within the list, 
the values of x only need to be after the elements less than x (see below). The partition 
element x can appear anywhere in the "right partition"; it does not need to appear between 
the left and right partitions.
*/

const partition = (head, x) => {
  if (!head) return head;
  let greaterThanX = new Node(); // dummy head
  let n = greaterThanX; // tail

  let lessThanX = new Node();
  let j = lessThanX;

  let equalToX = new Node();
  let k = equalToX;

  let pt = head;

  while (pt) {
    if (pt.val === x) {
      k.next = pt;
      k = k.next;
    } else if (x < pt.val) {
      n.next = pt;
      n = n.next;
    } else if (x > pt.val) {
      j.next = pt;
      j = j.next;
    }
    pt = pt.next;
  }

  // j = lessThanX;
  // k = equalToX;
  // n = greaterThanX;

  j.next = null;
  k.next = null;
  n.next = null;

  lessThanX = lessThanX.next;
  equalToX = equalToX.next;
  greaterThanX = greaterThanX.next;

  if (!equalToX) {
    return (j.next = greaterThanX);
  } else if (!lessThanX) {
    return (k.next = greaterThanX);
  } else if (!lessThanX && !greaterThanX) {
    return equalToX;
  } else {
    j.next = equalToX;
    k.next = greaterThanX;

    return lessThanX;
  }
};

const list1 = new Node(1);
list1.addNode(10);
list1.addNode(12);
list1.addNode(3);
list1.addNode(4);
list1.addNode(5);

console.log(list1.getValues());

console.log(partition(list1, 5));
console.log(list1.getValues());

const list2 = new Node(1);
list2.addNode(10);
list2.addNode(12);
list2.addNode(3);
list2.addNode(4);

console.log(partition(list2, 5));
console.log(list2.getValues());
