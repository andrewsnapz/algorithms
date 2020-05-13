function hasCycle(head) {
    if (!head) {
        return false;
    }

    let set = new Set();
    let position = head;
    while (position.next) {
        if (!set.has(position)) {
            set.add(position);
        } else if (set.has(position)) {
            return true;
        }
        position = position.next;
    }
    return false;
}