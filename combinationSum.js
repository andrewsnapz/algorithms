function combinationSum(candidates, target) {
  let res = [];
  dfsTransVersal(candidates, 0, target, [], res);
  return res;
}

function dfsTransVersal(candidates, startIdx, remaining, curPath, res) {
  if (remaining === 0) {
    res.push(curPath.slice());
  }
  for (let i = startIdx; i < candidates.length; i++) {
    if (remaining - candidates[i] >= 0) {
      curPath.push(candidates[i]);

      dfsTransVersal(candidates, i, remaining - candidates[i], curPath, res);

      curPath.pop();
    }
  }
}

console.log(combinationSum([2, 3, 5], 8)); // [[2,2,2,2], [2,3,3], [3,5]];
