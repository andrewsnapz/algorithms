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

/*
Remove Duplicates: write code that removes duplicates from
an unsorted linked list

FOLLOW UP:
How would you solve this problem if a temporary buffer is not allowed?
*/

// const removeDuplicates = (list) => {
//   let pt1 = list.head;
//   let pt2 = list.head.next;

//   while (pt2.next !== null) {
//     if (pt2.next === null) {
//       pt1 = pt1.next;
//       pt2 = pt1.next;
//     }

//     if (pt1.val !== pt2.val) {
//       pt2 = pt2.next;
//     } else {
//       let adjustedValue = pt2.next;
//       let curr = pt2;

//       pt2.next = adjustedValue;
//       pt2.val = adjustedValue.val;

//       pt2 = pt2.next;
//     }
//   }

//   console.log(iteriateLinkList(list));
//   return list;
// };

const removeDuplicates = (head) => {
  let pt = head;
  let set = new Set();

  while (pt) {
    set.add(pt);
    pt = pt.next;
  }
  console.log(set);
};

let linkList = new LinkedList();
linkList.addNode(1);
linkList.addNode(1);
linkList.addNode(2);
linkList.addNode(3);
linkList.addNode(1);
linkList.addNode(3);

console.log(removeDuplicates(linkList));

// class Node {
//   constructor(data = null) {
//     this.data = data;
//     this.next = null;
//   }
// }

// const removeDuplicates = (headNode) => {
//   let cur = headNode;
//   let visited = new Set([cur.data]);
//   while (cur.next) {
//     let nextnode = cur.next;
//     if (visited.has(nextnode.data)) {
//       // if current node data is visited, skip
//       cur.next = nextnode.next;
//     } else {
//       // if current node data is not visited, visit
//       visited.add(nextnode.data);
//       cur = nextnode;
//     }
//   }
//   return headNode;
// };

// // prepare data
// const arr = [1, 2, 1, 3, 4, 2, 1];
// let head, prevNode;
// while (arr.length > 0) {
//   let node = new Node(arr.pop());
//   if (prevNode) {
//     node.next = prevNode;
//   }
//   head = node;
//   prevNode = node;
// }

// // remove duplicate
// const headAfterRemove = removeDuplicates(head);

// // verify result
// let cursor = headAfterRemove;
// while (cursor) {
//   console.log(cursor.data);
//   cursor = cursor.next;
// }
