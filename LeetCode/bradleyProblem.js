/**
 * @param {Array of Objects} input - Eg.:
 * [
 *   { name: 'Joe', hrs: ['10', '11', '12'] },
 *   { name: 'Amy', hrs: ['11'] },
 *    ...
 * ]
 * Think of hrs as starting time where user is available that hour.
 *
 * @return {Object} - We want to return an object of all available hours
 *  mapped to all users who are available in that hour. Eg.:
 * {
 *   '10': ['Joe'],
 *   '11': ['Joe', 'Amy'],
 *   '12': ['Joe'],
 * }
 */
// input: array of objects
// output: object with people who are available during that hour
// 'hour': ['name', 'name2']
function getAvailTimes(data) {
  let outputObj = {};
  for (let i = 0; i < data.length; i++) {
    for (let k = 0; k < data[i].hrs.length; k++) {
      if (!outputObj[data[i].hrs[k]]) {
        outputObj[data[i].hrs[k]] = [];
        outputObj[data[i].hrs[k]].push(data[i].name);
      } else {
        outputObj[data[i].hrs[k]].push(data[i].name);
      }
    }
  }
  return outputObj;
}

// let input = [
//   { name: "Joe", hrs: ["10", "11", "12"] },
//   { name: "Amy", hrs: ["11"] },
// ];
// console.log(getAvailTimes(input));

/// --- Test -----------------------------------
/// No need to code nor understand the code here
//   const Mocha = require('mocha');
//   const assert = require('assert');
//   const mocha = new Mocha();
//   mocha.suite.emit('pre-require', this, 'solution', mocha);
//   describe('Test', function() {
//     const data = [
//       { name: 'Joe', hrs: ['10', '11', '12', '15', '16'] },
//       { name: 'May', hrs: ['11', '12', '13', '14', '16', '17'] },
//       { name: 'Zed', hrs: ['14', '15', '16', '17'] },
//       { name: 'Ben', hrs: ['10', '13', '15', '16'] },
//     ]
//     const expected = {
//       '10': [ 'Joe', 'Ben' ],
//       '11': [ 'Joe', 'May' ],
//       '12': [ 'Joe', 'May' ],
//       '13': [ 'May', 'Ben' ],
//       '14': [ 'May', 'Zed' ],
//       '15': [ 'Joe', 'Zed', 'Ben' ],
//       '16': [ 'Joe', 'May', 'Zed', 'Ben' ],
//       '17': [ 'May', 'Zed' ],
//     }
//     /// helpers to aid test.
//     const sorted = ary => ary.sort((a,b) => a - b);
//     const assertSameObject = (a, b) => {
//       assert.deepEqual(
//         sorted(Object.values(a)[0]),
//         sorted(Object.values(b)[0])
//       )
//     }
//     /// Test getAvailTimes(), feel free to console.log() as needed
//     it('getAvailTimes of sample data is as expected', () => {
//       const result = getAvailTimes(data);
//       assert.equal(Object.keys(result).length, Object.keys(expected).length)
//       Object.keys(expected).forEach(hr => {
//         assert.deepEqual(sorted(result[hr]), sorted(expected[hr]))
//       })
//     })
//     if (typeof(topNSlots) !== 'undefined') it(
//      'topNSlots of sample data is as expected', () => {
//       const result = topNSlots(getAvailTimes(data));
//       const expectedTop2 = [
//         {'16': [ 'Joe', 'May', 'Zed', 'Ben' ]},
//         {'15': [ 'Joe', 'Zed', 'Ben' ]},
//       ];
//       assert.equal(result.length, 3)
//       assert.equal(Object.keys(result[0]), '16')
//       assert.equal(Object.keys(result[1]), '15')
//       assertSameObject(result[0], expectedTop2[0]);
//       assertSameObject(result[1], expectedTop2[1]);
//       const hr3  = Object.keys(result[2])[0];
//       const len3 = Object.values(result[2])[0].length;
//       assert.equal(len3, 2);
//       assert.ok(hr3 === '17' || '10 11 12 13 14'.split(' ').includes(hr3));
//     })
//   })
//   mocha.run();
