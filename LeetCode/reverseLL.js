function reverseList(head) {
    if (!head) return head;
    let pointer = head;
    let arr = [];
    while (pointer) {
        arr.push(pointer.val);
        pointer = pointer.next;
    }
    arr.reverse();    
    pointer = head;
    let idx = 0;
    while(pointer) {
        pointer.val = arr[idx];
        pointer = pointer.next;
        idx++;
    }
};

