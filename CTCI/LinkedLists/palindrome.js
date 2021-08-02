/*
    Implement a function to check if a linked list is a palindrome
*/
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  addNode(val) {
    let n = this;
    let end = new Node(val);

    while (n.next !== null) {
      n = n.next;
    }
    n.next = end;
    return n;
  }

  getValues() {
    let n = this;
    let values = [];

    while (n.next !== null) {
      values.push(n.val);
      n = n.next;
    }
    return values;
  }
}

const palindrome = (head) => {
  if (!head) return false;
  let listValues = storeValues(head);
  console.log(listValues);
  let idx1 = 0;
  let idx2 = listValues.length - 1;

  while (idx1 < idx2) {
    console.log(`inside while loop`);
    if (listValues[idx1] === listValues[idx2]) {
      idx1++;
      idx2--;
      continue;
    } else {
      return false;
    }
  }
  return true;
};

const storeValues = (head) => {
  let values = [];
  while (head) {
    values.push(head.val);
    head = head.next;
  }
  return values;
};

const list = new Node("r");
list.addNode("a");
list.addNode("c");
list.addNode("e");
list.addNode("c");
list.addNode("a");
list.addNode("r");

console.log(palindrome(list)); // true

const list2 = new Node("h");
list2.addNode("a");
list2.addNode("n");
list2.addNode("n");
list2.addNode("a");
list2.addNode("h");

console.log(palindrome(list2)); // true

const list3 = new Node("j");
list3.addNode("e");
list3.addNode("f");
list3.addNode("f");

console.log(palindrome(list3)); // false
