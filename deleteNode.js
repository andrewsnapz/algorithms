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
}

function deleteNode(nodeToDelete) {

}

let a = new LinkedListNode(5);
let b = new LinkedListNode(6);
let c = new LinkedListNode(7);

a.next = b;
b.next = c;

console.log(a);
deleteNode(b);