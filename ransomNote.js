function ransomNote(magazine, note) {
    let setNote = new Set(note);
    for (let i = 0; i < magazine.length; i++) {
        if (setNote.has(magazine[i])) {
            setNote.delete(magazine[i]);
        }
    }
    if (setNote.size === 0) {
        return 'Yes';
    }
    return 'No';
}

let magazine1 = [ 'give', 'me', 'one', 'grand', 'today', 'night' ];
let note1 = [ 'give', 'one', 'grand', 'today' ];
let magazine2 = ['two', 'times', 'three', 'is', 'not', 'for'];
let note2 = ['two', 'times', 'two', 'is', 'four'];

console.log(ransomNote(magazine2, note2));