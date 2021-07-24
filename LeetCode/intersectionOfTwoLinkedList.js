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

// function getIntersectionNode(list1, list2) {
//     let position1 = list1;
//     let position2 = list2;
//     let list1Arr = [];
//     let list2Arr = [];
//     let intersectionElement;

//     while(position1) {
//         list1Arr.push(position1.val);
//         position1 = position1.next;
//     }

//     while (position2) {
//         list2Arr.push(position2.val);
//         position2 = position2.next;
//     }
//     let lastElement1 = list1Arr.length - 1;
//     let lastElement2 = list2Arr.length - 1;
//     while (list1Arr[lastElement1] === list2Arr[lastElement2]) {
//         intersectionElement = list1Arr[lastElement1];
//         lastElement1--;
//         lastElement2--;
//     }
//     console.log(intersectionElement);
// }

function getIntersectionNode(headA, headB) {
    let set = new Set();
    let positionA = headA;
    while(positionA) {
        set.add(positionA);
        positionA = positionA.next;
    }   
    
    let positionB = headB;
    while (positionB) {
        if (set.has(positionB)) {
            return positionB;
        } else {
            positionB = positionB.next;
        }
    }
    return null;
}


const l1 = new ListNode(4);
l1.add(1);
l1.add(8);
l1.add(4);
l1.add(5);

const l2 = new ListNode(5);
l2.add(0);
l2.add(1);
l2.add(8);
l2.add(4);
l2.add(5);

console.log(getIntersectionNode(l1, l2));