const middleNode = head => {
    let linkLength = getListLength(head);
    let halfPoint = 0;
    if (linkLength % 2 === 0) {
        halfPoint = (linkLength / 2) + 1;
    } else {
        halfPoint = Math.ceil((linkLength / 2));
    }
    
    let length = 0;
    let position = head;
    while(length !== halfPoint - 1) {
        length++;
        position = position.next;
        console.log(length)
    }
    return position;
}

const getListLength = head => {
    let position = head;
    let length = 0;
    while (position) {
        length++;
        position = position.next;
    }
    return length;
}