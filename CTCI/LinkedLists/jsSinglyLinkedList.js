class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addNode(val) {
    let n = this.head;
    let node = new Node(val);

    if (!this.head) {
      this.head = node;
      return;
    }

    while (n.next !== null) {
      n = n.next;
    }
    this.tail = node;
    n.next = node;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  setNewHead(val) {
    let node = new Node(val);
    let oldHead = this.head;
    this.head = node;
    node.next = oldHead;
    return this.head;
  }

  deleteHead() {
    let deletedHead = this.head;
    let newlyAppointedHead = deletedHead.next;

    this.head = newlyAppointedHead;
    deletedHead.next = null;

    return newlyAppointedHead;
  }
}

// let linkedList = new LinkedList();
// linkedList.addNode(1);
// linkedList.addNode(2);

// console.log(linkedList.getHead()); // 1
// console.log(linkedList.getTail()); // 2

// linkedList.addNode(3);
// linkedList.addNode(4);

// console.log(linkedList.getTail()); // 4

// linkedList.setNewHead(0);
// console.log(linkedList.getHead()); // 0

// linkedList.deleteHead();
// console.log(linkedList.getHead()); // 1

module.exports = LinkedList;
