class AncestralTree {
    constructor(name) {
      this.name = name;
      this.ancestor = null;
    }
  }

function youngestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
    let descendantOneAncestors = [];
    let descendantTwoAncestors = [];
    let position1 = descendantOne;
    let position2 = desendantTwo;

    while (position1.ancestor !== topAncestor.name) {
        descendantOneAncestors.push(position1.name);
        position1 = position1.ancestor;
    }

    while (position2.ancestor !== topAncestor.name) {
        descendantTwoAncestors.push(position2.name);
        position2 = position2.ancestor;
    }
    for (let i = 0; i < descendantOneAncestors.length; i++) {
        for (let x = 0; x < descendantTwoAncestors.length; x++) {
            if (descendantOneAncestors[i] === descendantTwoAncestors[x]) {
                return descendantOneAncestors[i];
            }
        }
    }
    return topAncestor;
}
