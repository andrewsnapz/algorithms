var insert = function (intervals, newInterval) {
  const result = [];
  for (let i = 0; i < intervals.length; i++) {
    let interval = intervals[i];

    if (
      Math.max(interval[0], newInterval[0]) <=
      Math.min(interval[1], newInterval[1])
    ) {
      newInterval = [
        Math.min(interval[0], newInterval[0]),
        Math.max(interval[1], newInterval[1]),
      ];
      console.log(`newInterval: ${newInterval}`);
      continue;
    }

    if (interval[0] > newInterval[1]) {
      result.push(newInterval, ...intervals.slice(i));
      return result;
    }
    result.push(interval);
  }
  result.push(newInterval);
  return result;
};

// console.log(
//   insert(
//     [
//       [1, 3],
//       [6, 9],
//     ],
//     [2, 5]
//   )
// ); // [[1,5], [6,9]]
console.log(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  )
); // [[1,2],[3,10],[12,16]]

// console.log(insert([[1, 5]], [2, 7])); // [[1,7]]
