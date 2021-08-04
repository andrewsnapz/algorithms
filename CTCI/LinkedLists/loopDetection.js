/*
Given a circular linked list, implement an algorithm that returns the node at the 
beginning of the loop. 
DEFINITION 
Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, so 
as to make a loop in the linked list. 
*/

const loopDetection = (head) => {
  if (!head) return false;

  let set = new Set();
  let position = head;
  while (position.next) {
    if (!set.has(position)) {
      set.add(position);
    } else if (set.has(position)) {
      return position;
    }
  }
  return false;
};
