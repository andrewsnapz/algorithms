function ListNode(val) {
    this.value = val;
    this.next = null;
}

function removeKFromList(l, k) {
    let map = {};
    let length = 1;
    let position = l;
    while (position.next !== null) {
        map[length] = position;
        length++;
        position = position.next;
    }
    let kFromLength = length - k;
    if (kFromLength === 0) {
        l = l.next;
    } else {
        map[kFromLength].next = map[kFromLength + 1]? map[kFromLength + 1].next : null;
    }
    return l;
}