var reorderList = function(head) {
    if (!head) return [];
    let arr = [];
    let position = head.next;
    let index = 0;
    
    while (position) {
        arr.push(position.val)
        position = position.next;
    }
    let poppedVal = arr.pop();
    arr.unshift(poppedVal);
    position = head.next;
    
    while(position) {
        position.val = arr[index];
        index++;
        position = position.next;
    }
    
    return head;
}

