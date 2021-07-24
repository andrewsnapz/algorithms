function removeElements(head, val) {
    let prev;
    let curr = head;
    let next = head.next;

    while (curr) {
        if (curr.val === val) {
            if (!prev) {
                curr.next = null;
                curr = next;
                next = curr.next;
            } else {
                prev = curr;
                curr = next;
                next = curr.next;
            }
        } else {
            prev = curr;
            curr = next;
            next = curr.next;
        }
    }
    return head;
}