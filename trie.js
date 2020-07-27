// var Trie = function() {
//     this.obj = {};
//     this.index = 0;
// };

// Trie.prototype.insert = function(word) {
//     this.obj[this.index] = word;
//     this.index++;
//     return this.obj;
// };

// Trie.prototype.search = function(word) {
//     for (let i = 0; i < this.index; i++) {
//         if (word === this.obj[i]) return true;
//     }
//     return false;
// };

// Trie.prototype.startsWith = function(prefix) {
//     for (let i=0; i < this.index; i++) {
//         if (this.obj[i].includes(prefix)) return true;
//     }
//     return false;
// };

class Trie {
    constructor() {
      this.root = {};
    }
  
    insert(word) {
      let node = this.root;
      for (let c of word) {
        if (node[c] == null) node[c] = {};
        node = node[c];
      }
      node.isWord = true;
    }
  
    traverse(word) {
      let node = this.root;
      for (let c of word) {
        node = node[c];
        if (node == null) return null;
      }
      return node;
    }
  
    search(word) {
      const node = this.traverse(word);
      return node != null && node.isWord === true;
    }
  
    startsWith(prefix) {
      return this.traverse(prefix) != null;
    }
  }

let trie = new Trie();
trie.insert('apple');
trie.search('apple');
trie.search('app');
trie.startsWith('app');
trie.insert('app');
trie.search('app');

console.log(trie);
console.log(trie.search('apple'));
console.log(trie.startsWith('app'));