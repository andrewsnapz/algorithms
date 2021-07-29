const LinkedList = require("./jsSinglyLinkedList");

/*
    class LinkList {
        constructor() {
            this.head = null
            this.tail = null
        }
        addNode();
    }

    class Node {
        constructor(val) {
            this.val = val;
            this.next = null;
        }
    }
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

/*
Remove Duplicates: write code that removes duplicates from
an unsorted linked list

FOLLOW UP:
How would you solve this problem if a temporary buffer is not allowed?
*/

// const removeDuplicates = (head) => {
//   let pt = head;
//   let set = new Set();

//   while (pt) {
//     set.add(pt);
//     pt = pt.next;
//   }
//   console.log(set);
// };

const removeDuplicates = (head) => {
  if (!head) return head;
  let target = head;
  let pt1 = head;
  let pt2 = head.next;

  while (target) {
    while (pt2.next !== null) {
      if (pt2.val === target.val) {
        pt1.next = pt2.next;
      }
      pt1 = pt1.next;
      pt2 = pt2.next;
    }

    if (!target.next) break;

    target = target.next;
    pt1 = target;
    pt2 = pt1.next;
  }

  return head;
};

let linkList = new Node(1);
linkList.addNode(1);
linkList.addNode(2);
linkList.addNode(3);
linkList.addNode(1);
linkList.addNode(3);

console.log(removeDuplicates(linkList));
console.log(linkList.getValues());
