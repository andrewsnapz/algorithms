// class LinkList {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
//     add(val) {
//         let node = new LinkList(val);
//         if (!this.next) {
//             this.next = node;
//         } else {
//             let position = this;
//             while(position) {
//                 position = position.next;
//             }
//             position.next = node;
//             console.log("this is the position: ", position)
//         }
//     }
// }

function LinkList(val) {
    this.val = val;
    this.next = null;
};

LinkList.prototype.add = function(val) {
    let node = new LinkList(val);
    if (!this.next) {
        this.next = node;
    }
    let position = this;
    console.log("these are the two nodes: ", node)
    while(position) {
        if (!position.next) {
            position.next = node;
        }
        position = position.next;
    }
    return this;
}


const list = new LinkList(1);
list.add(2);
list.add(3);
console.log(list);