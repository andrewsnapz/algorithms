function ListNode(val) {
    this.value = val;
    this.next = null;
}

function removeKFromList(l, k) {
    let currentNode = l;
    let nextNode = currentNode.next;
    while (currentNode) {
        if (currentNode.value === k) {
            currentNode.next = currentNode.next.next;
        }
    }
}

// 3 -> 1 -> 2 -> 3 -> 4 -> 5 
//k:3

// def removeKFromList(head, k):
    
//     if head == None:
//         return head
//     elif head.value == k:
//         head = head.next
        
//     n = head
     
//     while n != None and n.next != None:
//         if n.next.value == k:
//             n.next = n.next.next
//         else:
//             n = n.next  
    
//     if n != None and n.value == k:
//         head = head.next
        
//     return head