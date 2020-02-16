class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
    add(val) {
        let node = new ListNode(val)
        let position = this;

        while (position) {
            if (position.next === null) {
                position.next = node;
                break;
            } else {
                position = position.next;
            }
        }
    }
}

// class headAndTail {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//     }
// }
 

function mergeTwoLists(l1, l2) {
    let values = [];
    let l1Position = l1;
    let l2Position = l2;
    let mergedList;

    if ((typeof l1 !== "object" || Array.isArray(l1)) && (typeof l2 !== "object" || Array.isArray(l2))) {
        return [];
    }

    while (l1Position) {
        values.push(l1Position.val);
        l1Position = l1Position.next;
    }
    while (l2Position) {
        values.push(l2Position.val);
        l2Position = l2Position.next;
    }
    
    let sortedValues = values.sort((a,b) => a - b);
    return newList(sortedValues);
}

function newList(array) {
    let sortedList = new ListNode(array[0]);
    for (let i = 1; i < array.length; i++) {
        sortedList.add(array[i]);
    }
    return sortedList;
}

let list1 = new ListNode(1);
list1.add(2);
list1.add(4);


let list2 = new ListNode(1);
list2.add(3);
list2.add(4);

console.log(mergeTwoLists(list1, list2));
console.log(mergeTwoLists([], []));

