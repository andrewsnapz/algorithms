class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
    add(val) {
        let node = new ListNode(val)
        let position = this;

        while (position) {
            if (position.next === null) {
                position.next = node;
                break;
            } else {
                position = position.next;
            }
        }
    }
}

function isPalindrome(list) {
    let position = list;
    let array = [];

    while (position) {
        array.push(position.val);
        position = position.next;
    }

    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        if (array[left] === array[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
} 

const list = new ListNode(1);
list.add(2);
list.add(2);
list.add(1);

const crapList = new ListNode(1);
crapList.add(2);
crapList.add(3);

console.log(crapList);
console.log(isPalindrome(list));
console.log(isPalindrome(crapList));