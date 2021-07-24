var swapPairs = function(head) {
    let cur = head;
    let newHead = head && head.next ? head.next : head;
        
    while (cur && cur.next) {
        let next = cur.next;
        let temp = next.next;
        
        next.next = cur;
        cur.next = temp && temp.next ? temp.next : temp;
        
        cur = temp;
    }

    
    return newHead;
};