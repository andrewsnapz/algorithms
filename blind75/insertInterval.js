const insert = (intervals, newInterval) => {
  insertNewInterval(intervals, newInterval);
  return mergeIntervals(intervals);
};

const insertNewInterval = (intervals, newInterval) => {
  intervals.push(newInterval);
  intervals.sort((a, b) => a[0] - b[0]);
  return intervals;
};

const mergeIntervals = (intervals) => {
  let pt1 = 0;
  let pt2 = 1;

  while (pt2 < intervals.length) {
    if (
      intervals[pt1][0] < intervals[pt2][0] &&
      intervals[pt1][1] > intervals[pt2][0]
    ) {
      let startVal = Math.min(intervals[pt1][0], intervals[pt2][0]);
      let endVal = Math.max(intervals[pt1][1], intervals[pt2][1]);
      let interval = [startVal, endVal];

      intervals.splice(pt1, 2, interval);
      pt1 = 0;
      pt2 = 1;

      continue;
    } else if (intervals[pt1][1] === intervals[pt2][0]) {
      let interval = [intervals[pt1][0], intervals[pt2][1]];

      intervals.splice(pt1, 2, interval);
      pt1 = 0;
      pt2 = 1;
    } else if (intervals[pt1][0] === intervals[pt2][0]) {
      let endVal = Math.max(intervals[pt1][1], intervals[pt2][1]);
      let interval = [intervals[pt1][0], endVal];

      intervals.splice(pt1, 2, interval);
    } else {
      pt1++;
      pt2++;
    }
  }
  return intervals;
};

console.log(insert([[1, 5]], [1, 7]));
// console.log(
//   insert(
//     [
//       [1, 3],
//       [6, 9],
//     ],
//     [2, 5]
//   )
// ); // [[1,5], [6,9]]

// console.log(insert([], [5, 7])); // [[5,7]]

// console.log(
//   insert(
//     [
//       [1, 2],
//       [3, 5],
//       [6, 7],
//       [8, 10],
//       [12, 16],
//     ],
//     [4, 8]
//   )
// );
// // // [[1,2],[3,10],[12,16]]

// console.log(insert([[1, 5]], [2, 3])); // [[1,5]]

// console.log(insert([[1, 5]], [2, 7])); // [[1,7]]
