class AncestralTree {
    constructor(name) {
      this.name = name;
      this.ancestor = null;
    }
  }

function youngestCommonAncestor(topAncestor, descendantOne, descendantTwoAncestors) {
    let descendantOneDepth = getDepth(topAncestor, descendantOne);
    let descendantTwoDepth = getDepth(topAncestor, descendantTwo);
    let depthDifference = Math.abs(descendantOneDepth - descendantTwoDepth);
    let position1;
    let position2; 
    let movement = 0;
    if (descendantOneDepth >= descendantTwoDepth) {
        position = descendantOne;
        position2 = descendantTwo;
    } else if (descendantOneDepth < descendantTwoDepth) {
        position1 = descendantTwo;
        position2 = descendantOne;
    }
    while (position1) {
        if (movement === depthDifference) {
            if (position1.ancestor === position2.ancestor) {
                return position1.ancestor;
            } else {
                break;
             }
        } else {
            movement++;
            position = position.ancestor;
        }
    }
    return topAncestor;
}

function getDepth(topAncestor, descendant) {
    let position = descendant;
    let depth = 0;
    while (position.ancestor !== topAncestor.name) {
        depth++;
        position - position.ancestor;
    }
    return depth;
}