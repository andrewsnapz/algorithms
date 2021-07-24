function oddEvenList(head) {
    if (!head) {
        return head;
    }
    
    let oddArr = [];
    let evenArr = [];
    let position = head;
    let count = 1;

    while(position) {
        if (count % 2 !==0) {
            oddArr.push(position);
        }
        
        if (count % 2 ===0) {
            evenArr.push(position);
        }
        count++;
        position = position.next;
    }
    
    let concatArr = oddArr.concat(evenArr);
    let pointer1=0;
    let pointer2= pointer1 + 1;
    while(pointer2 < concatArr.length) {
        concatArr[pointer1].next = concatArr[pointer2];
        pointer1++;
        pointer2++;
    }
    concatArr[concatArr.length - 1].next = null;
    return head;
};

// function oddEvenList(head) {
//     if (head === null) return null;
//     let odd = head;
//     let even = head.next;
//     let evenHead = even;
//     while (even !== null && even.next !==null) {
//         odd.next = even.next;
//         odd = odd.next;
//         even.next = odd.next;
//         even = even.next;
//     }
//     odd.next = evenHead;
//     return head;
// };