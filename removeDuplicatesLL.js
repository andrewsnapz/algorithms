function deleteDuplicates(head) {
    if (!head) return head;
    let pointer1 = head;
    let pointer2 = head.next;

    while(pointer2) {
        if (pointer1.val === pointer2.val) {
            pointer1.next = pointer1.next.next;
            pointer2 = pointer1.next;
        } else {
            pointer1 = pointer1.next;
            pointer2= pointer2.next;
        }
    }
    return head;
}

