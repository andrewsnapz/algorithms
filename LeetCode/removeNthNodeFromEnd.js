/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
    if (!head) return head;
    let length = 0;
    let pointer = head;

    while (pointer) {
        length++;
        pointer = pointer.next;
    }

    length = length - n + 1;
    
    let count = 1;
    let prev;
    let curr = head;

    while(curr) {
        if (count !== length) {
            prev = curr;
            curr = curr.next;
        } else {
            if (!prev && !curr.next) return null;
            if (count === 1 && head.next) {
                return head.next;
            }
            prev.next = curr.next;
            break;
        }
        count++;
    }
    return head;
}