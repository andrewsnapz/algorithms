class LinkedListNode { 
    constructor(value) { 
        this.value = value;
        this.next = null;
    }
}

class headAndTail { 
    constructor() { 
        this.head = null;
        this.tail = null;
    }
    add(node) {
        if (!this.head) { 
            this.head = node;
            this.tail = node;
        } else if (this.head) {
             
        }
    }
}

function deleteNode(nodeToDelete) {

}

let linkedList = new headAndTail();

// let a = new LinkedListNode(5);
// let b = new LinkedListNode(6);
// let c = new LinkedListNode(7);

// a.next = b;
// b.next = c;

// console.log(a);
// deleteNode(b);