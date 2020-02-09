class LinkedListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
//   function reverse(headOfList) {
//     // Reverse the linked list in place
//     let position = headOfList;
//     while(position.next) {
//         let copyOfNext = headOfList.next;
//         let copyOfPrevious = headOfList.previous;
//         headOfList.next = copyOfPrevious;
//         headOfList.previous = copyOfNext;
//         position = headOfList.previous;
//         console.log(headOfList);
//   }
//   return headOfList;
// }
//   const linkedList = new LinkedListNode(1);
//   linkedList.next = new LinkedListNode(2);
//   linkedList.previous = linkedList;
//   linkedList.next.next = new LinkedListNode(3);
//   linkedList.next.previous = linkedList.previous;

//   console.log(reverse(linkedList));

  function reverse(headOfList) {
    let currentNode = headOfList;
    let previousNode = null;
    let nextNode = null;
  
    // Until we have 'fallen off' the end of the list
    while (currentNode) {
  
      // Copy a pointer to the next element
      // before we overwrite currentNode.next
      nextNode = currentNode.next;
  
      // Reverse the 'next' pointer
      currentNode.next = previousNode;
  
      // Step forward in the list
      previousNode = currentNode;
      currentNode = nextNode;
    }
  
    return previousNode;
  }
